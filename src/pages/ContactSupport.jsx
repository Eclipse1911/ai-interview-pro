import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactSupport() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">AI Interview Pro</Link>
          <Link to="/" className="text-primary hover:underline font-label-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="font-headline-xl text-on-surface dark:text-white mb-6">Contact Support</h1>
            <p className="font-body-lg text-on-surface-variant dark:text-gray-300 mb-8">
              Have questions or need assistance with your interview preparation? Our team is here to help you succeed.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-fixed dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-blue-400">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[18px] text-on-surface dark:text-white">Email Us</h3>
                  <p className="text-on-surface-variant dark:text-gray-400">support@aiinterviewpro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-fixed dark:bg-teal-900/30 rounded-full flex items-center justify-center text-secondary dark:text-teal-400">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[18px] text-on-surface dark:text-white">FAQ Center</h3>
                  <p className="text-on-surface-variant dark:text-gray-400">Find quick answers to common questions in our help center.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-[24px] shadow-xl border border-gray-100 dark:border-gray-700 ai-glow">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary-fixed dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-blue-400 mx-auto mb-6">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>
                <h2 className="font-headline-md text-on-surface dark:text-white mb-2">Message Sent!</h2>
                <p className="text-on-surface-variant dark:text-gray-400">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary hover:underline font-label-md"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-label-md text-on-surface-variant dark:text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant dark:text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-on-surface-variant dark:text-gray-400 mb-1">Message</label>
                  <textarea 
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-xl font-headline-md shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
