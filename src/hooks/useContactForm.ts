import { useState, useCallback } from 'react';
import { ContactFormData, APIResponse } from '@/types';
import { isValidEmail } from '@/lib/utils';

const GENERIC_ERROR = 'Something went wrong. Please try again later.';

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Partial<ContactFormData>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errorMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  validateForm: () => boolean;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    setErrorMessage('');
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setSubmitStatus('success');
      } else {
        // Only validation and rate-limit responses carry text meant for the
        // visitor. Anything else (config, SMTP, unexpected) stays generic.
        const userFacing = response.status === 400 || response.status === 429;
        setSubmitStatus('error');
        setErrorMessage(userFacing && result.error ? result.error : GENERIC_ERROR);
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(GENERIC_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateForm
  };
}