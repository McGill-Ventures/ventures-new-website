import { useState, useCallback } from 'react';
import { ContactFormData, APIResponse } from '@/types';
import { isValidEmail } from '@/lib/utils';

interface UseContactFormOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Partial<ContactFormData>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  validateForm: () => boolean;
}

export function useContactForm({ onSuccess, onError }: UseContactFormOptions = {}): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[id as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  }, [errors]);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitStatus('idle');
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: APIResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        resetForm();
        onSuccess?.();
      } else {
        setSubmitStatus('error');
        onError?.(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      onError?.(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, resetForm, onSuccess, onError]);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateForm
  };
}