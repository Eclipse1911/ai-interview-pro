import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
        <h1 className="font-headline-xl text-on-surface dark:text-white mb-6">Terms of Service</h1>
        <p className="font-body-md text-on-surface-variant dark:text-gray-400 mb-8">Last updated: October 24, 2023</p>

        <section className="space-y-6">
          <div>
            <h2 className="font-headline-md text-on-surface dark:text-white mb-3">1. Terms</h2>
            <p className="font-body-md leading-relaxed text-on-surface-variant dark:text-gray-300">
              By accessing the website at AI Interview Pro, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-on-surface dark:text-white mb-3">2. Use License</h2>
            <ul className="list-decimal pl-6 space-y-2 text-on-surface-variant dark:text-gray-300">
              <li>Permission is granted to temporarily download one copy of the materials (information or software) on AI Interview Pro's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</li>
              <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by AI Interview Pro at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-headline-md text-on-surface dark:text-white mb-3">3. Disclaimer</h2>
            <p className="font-body-md leading-relaxed text-on-surface-variant dark:text-gray-300">
              The materials on AI Interview Pro's website are provided on an 'as is' basis. AI Interview Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
