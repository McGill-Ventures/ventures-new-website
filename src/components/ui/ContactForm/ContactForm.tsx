"use client";

import { Loader2, Send } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button/Button";

const LABEL = "block font-heading text-xs tracking-wider text-purple-300 uppercase";

const FIELD =
  "mt-3 block w-full border border-white/30 bg-transparent px-4 py-3.5 font-body text-white placeholder:text-white/40 transition-colors hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 disabled:opacity-50";

const FIELD_ERROR = "border-red-300/80 hover:border-red-300";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 font-body text-sm text-red-300">
      {message}
    </p>
  );
}

export function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  if (submitStatus === "success") {
    return (
      <div role="status" className="border-t border-white/10 pt-8">
        <p className="font-display text-3xl leading-[1.05] md:text-4xl">Message sent.</p>
        <p className="mt-4 max-w-md font-body text-lg text-purple-100/75">
          Thanks for writing. We&apos;ll reply by email.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-8 font-heading text-lg text-purple-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            className={cn(FIELD, errors.name && FIELD_ERROR)}
            placeholder="Your name"
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            className={cn(FIELD, errors.email && FIELD_ERROR)}
            placeholder="you@example.com"
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={LABEL}>
          Subject <span className="text-white/40 normal-case">(optional)</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={FIELD}
          placeholder="What is this about?"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className={cn(FIELD, "resize-y", errors.message && FIELD_ERROR)}
          placeholder="Tell us more"
          required
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              Sending
              <Loader2 aria-hidden className="size-5 animate-spin" />
            </>
          ) : (
            <>
              Send message
              <Send aria-hidden className="size-5" />
            </>
          )}
        </Button>
        {submitStatus === "error" && (
          <p role="alert" className="font-body text-red-300">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
