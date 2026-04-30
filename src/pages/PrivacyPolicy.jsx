import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
        <h1 className="font-headline-xl text-on-surface dark:text-white mb-6">Privacy Policy</h1>
        <p className="font-body-md text-on-surface-variant dark:text-gray-400 mb-8">Last updated: October 24, 2023</p>

        <section className="space-y-6">
          <div>
            <h2 className="font-headline-md text-on-surface dark:text-white mb-3">1. Information We Collect</h2>
            <p className="font-body-md leading-relaxed text-on-surface-variant dark:text-gray-300">
              In addition to account information, we collect data related to your mock interviews, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-on-surface-variant dark:text-gray-300 font-body-md">
              <li>Voice and video recordings from your practice sessions (processed for real-time feedback).</li>
              <li>Text transcripts of your responses.</li>
              <li>Performance metrics and AI-generated scores.</li>
              <li>Technical setup information (camera/microphone permissions).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-headline-md text-on-surface dark:text-white mb-3">2. How We Use Your Information</h2>
            <p className="font-body-md leading-relaxed text-on-surface-variant dark:text-gray-300 mb-2">
              We use your interview data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant dark:text-gray-300">
              <li>Provide instant AI-driven feedback on your performance.</li>
              <li>Track your progress over time and suggest areas for improvement.</li>
              <li>Train and improve our AI models (only on anonymized data).</li>
              <li>Facilitate a personalized dashboard and interview history.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-headline-md text-on-surface dark:text-white mb-3">3. Data Security & Deletion</h2>
            <p className="font-body-md leading-relaxed text-on-surface-variant dark:text-gray-300">
              Your interview recordings are processed securely. You can delete your interview history at any time from your Profile settings. We do not sell your personal data or interview recordings to third parties.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
