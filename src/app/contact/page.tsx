"use client";

import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import eventImage from '../../../public/events/pizza.jpg';
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPlaneAnimation, setShowPlaneAnimation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      if (response.ok) {
        setSubmitStatus('success');
        setShowPlaneAnimation(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        // Hide plane animation after 3 seconds
        setTimeout(() => {
          setShowPlaneAnimation(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation currentPage="/contact" />

      {/* Flying Plane Animation */}
      {showPlaneAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="relative w-full h-full">
            <div className="absolute top-1/3 -left-20 animate-fly-across">
              <svg 
                className="w-16 h-16 text-purple-600 transform rotate-12" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Image Space */}
      <section className="px-6 py-20 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              Contact Us
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-12"></div>
            <div className="w-3/4 md:w-2/3 lg:w-1/2 h-96 md:h-[50vh] bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mb-8 animate-fade-in-up overflow-hidden mx-auto" style={{animationDelay: '0.2s'}}>
              <Image 
                src={eventImage} 
                alt="McGill Ventures hero image" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-2xl rounded-3xl p-10 border border-purple-200">
                <h2 className="text-4xl font-display text-purple-950 mb-6">Get in Touch</h2>
                <p className="text-xl text-purple-800 font-body mb-8 leading-relaxed">
                  Ready to discuss your innovative ideas? We'd love to hear from exceptional entrepreneurs 
                  who are building the future.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 text-green-800 rounded-xl font-semibold animate-bounce">
                    ✈️ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 text-red-800 rounded-xl font-semibold">
                    ❌ Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-heading font-semibold text-purple-950 mb-3">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300 bg-white shadow-sm text-lg text-gray-900 placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-heading font-semibold text-purple-950 mb-3">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300 bg-white shadow-sm text-lg text-gray-900 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-heading font-semibold text-purple-950 mb-3">Message *</label>
                    <textarea 
                      id="message" 
                      rows={8}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all duration-300 bg-white shadow-sm resize-none text-lg text-gray-900 placeholder-gray-500"
                      placeholder="What would you like to share with us?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-5 rounded-xl transition-all duration-300 font-heading text-xl font-bold shadow-lg transform hover:scale-105 ${
                      isSubmitting 
                        ? 'bg-purple-400 cursor-not-allowed scale-100 text-white' 
                        : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white hover:shadow-2xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-display text-purple-950 mb-8">Reach Out</h2>
              <div className="space-y-8">
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-heading text-purple-950 mb-4">General Inquiries</h3>
                  <div className="space-y-3 text-purple-800 font-body">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      hello@mcgillvc.ca
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +1 (514) 555-0123
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-1 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        McGill Ventures<br />
                        1001 Sherbrooke St W<br />
                        Montreal, QC H3A 1G5<br />
                        Canada
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-heading text-purple-950 mb-4">Follow Us</h3>
                  <div className="space-y-4 text-purple-800 font-body">
                    <a 
                      href="https://www.instagram.com/mcgillvc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-purple-600 transition-colors duration-300 group"
                    >
                      <svg className="w-6 h-6 mr-3 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="group-hover:underline">@mcgillvc</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/mcgillvc/?originalSubdomain=ca" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-purple-600 transition-colors duration-300 group"
                    >
                      <svg className="w-6 h-6 mr-3 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="group-hover:underline">McGill VC</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display mb-8">
              Ready to Transform Your Vision?
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-2xl text-purple-100 mb-12 leading-relaxed font-body">
              Join the ranks of successful entrepreneurs who have partnered with McGill Ventures 
              to build category-defining companies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}