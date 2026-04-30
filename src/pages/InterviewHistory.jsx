import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function InterviewHistory() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg text-on-background mb-2">Interview History</h1>
          <p className="text-on-surface-variant font-body-lg">Review your past mock interviews and performance metrics.</p>
        </div>

        <section className="bg-white p-6 rounded-[16px] shadow-sm">
          <div className="space-y-4">
            {/* Activity Item 1 */}
            <Link to="/feedback" className="flex items-center justify-between p-4 rounded-[12px] hover:bg-surface-container-low transition-colors group border border-transparent hover:border-gray-100 block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[16px] text-on-background">System Design Mock</h3>
                  <p className="text-outline font-label-sm text-label-sm">Yesterday • 45 minutes</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <span className="block font-headline-md text-primary">8.4</span>
                  <span className="text-outline text-[10px] font-bold uppercase tracking-wider">AI Score</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
              </div>
            </Link>

            {/* Activity Item 2 */}
            <Link to="/feedback" className="flex items-center justify-between p-4 rounded-[12px] hover:bg-surface-container-low transition-colors group border border-transparent hover:border-gray-100 block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[16px] text-on-background">Behavioral Drill</h3>
                  <p className="text-outline font-label-sm text-label-sm">Oct 24, 2023 • 20 minutes</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <span className="block font-headline-md text-primary">7.2</span>
                  <span className="text-outline text-[10px] font-bold uppercase tracking-wider">AI Score</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
              </div>
            </Link>

            {/* Activity Item 3 */}
            <Link to="/feedback" className="flex items-center justify-between p-4 rounded-[12px] hover:bg-surface-container-low transition-colors group border border-transparent hover:border-gray-100 block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[16px] text-on-background">Algorithms: Dynamic Programming</h3>
                  <p className="text-outline font-label-sm text-label-sm">Oct 22, 2023 • 60 minutes</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <span className="block font-headline-md text-primary">9.1</span>
                  <span className="text-outline text-[10px] font-bold uppercase tracking-wider">AI Score</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50 flex justify-around items-center px-4 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:bg-gray-900 dark:border-gray-800">
        <Link className="flex flex-col items-center justify-center text-gray-500 px-4 py-1 hover:bg-gray-50 active:scale-90 transition-all duration-150 dark:text-gray-400" to="/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-['Inter'] text-[10px] font-semibold">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-xl px-4 py-1 active:scale-90 transition-all duration-150 dark:bg-blue-900/30 dark:text-blue-300" to="/history">
          <span className="material-symbols-outlined">history</span>
          <span className="font-['Inter'] text-[10px] font-semibold">History</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-gray-500 px-4 py-1 hover:bg-gray-50 active:scale-90 transition-all duration-150 dark:text-gray-400" to="/profile">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] font-semibold">Profile</span>
        </Link>
      </nav>
      {/* Space for Bottom Nav on Mobile */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
