"use client";

import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Icon } from '@/components/ui';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmitSuccess, 
  onSubmitError 
}) => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useContactForm({ 
    onSuccess: onSubmitSuccess, 
    onError: onSubmitError 
  });

  const isSubmitted = submitStatus === 'success';
  
  const clearError = (fieldName: string) => {
    // This functionality is already handled in handleInputChange
  };

  return (
    <div className="bg-white border border-purple-200 rounded-3xl p-8 shadow-xl">
      <h2 className="text-4xl font-display text-purple-950 mb-8">Send us a message</h2>
      <p className="text-purple-700 mb-8 font-body text-lg">
        Have a question about our programs, want to partner with us, or just want to say hello? We'd love to hear from you.
      </p>
      
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="check" className="text-white" size="lg" />
          </div>
          <h3 className="text-2xl font-display text-purple-950 mb-4">Message Sent!</h3>
          <p className="text-purple-700 font-body">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-purple-950 font-heading font-semibold mb-3 text-sm">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => clearError('name')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const emailInput = document.getElementById('email');
                    emailInput?.focus();
                  }
                }}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 font-body text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                  errors.name 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-gray-300 bg-gray-50 hover:border-purple-400 focus:border-purple-500 focus:bg-white'
                }`}
                placeholder="Your name"
                required
                disabled={isSubmitting}
                tabIndex={1}
              />
              {errors.name && (
                <p className="mt-2 text-red-600 text-sm font-body">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-purple-950 font-heading font-semibold mb-3 text-sm">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => clearError('email')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const subjectInput = document.getElementById('subject');
                    subjectInput?.focus();
                  }
                }}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 font-body text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                  errors.email 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-gray-300 bg-gray-50 hover:border-purple-400 focus:border-purple-500 focus:bg-white'
                }`}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
                tabIndex={2}
              />
              {errors.email && (
                <p className="mt-2 text-red-600 text-sm font-body">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-purple-950 font-heading font-semibold mb-3 text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              onFocus={() => clearError('subject')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  const messageInput = document.getElementById('message');
                  messageInput?.focus();
                }
              }}
              className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 font-body text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                errors.subject 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300 bg-gray-50 hover:border-purple-400 focus:border-purple-500 focus:bg-white'
              }`}
              placeholder="What's this about?"
              disabled={isSubmitting}
              tabIndex={3}
            />
            {errors.subject && (
              <p className="mt-2 text-red-600 text-sm font-body">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-purple-950 font-heading font-semibold mb-3 text-sm">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => clearError('message')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
                  submitButton?.focus();
                } else if (e.key === 'Tab' && !e.shiftKey) {
                  e.preventDefault();
                  const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
                  submitButton?.focus();
                }
              }}
              className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 font-body text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none ${
                errors.message 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300 bg-gray-50 hover:border-purple-400 focus:border-purple-500 focus:bg-white'
              }`}
              placeholder="Tell us more about your inquiry... (Shift+Enter for new line)"
              required
              disabled={isSubmitting}
              tabIndex={4}
            />
            {errors.message && (
              <p className="mt-2 text-red-600 text-sm font-body">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (!isSubmitting) {
                  handleSubmit(e as any);
                }
              }
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-heading text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-purple-600 disabled:hover:to-purple-700 disabled:transform-none flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
            tabIndex={5}
          >
            {isSubmitting ? (
              <>
                <Icon name="spinner" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {(errors as any).general && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700 font-body">{(errors as any).general}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};