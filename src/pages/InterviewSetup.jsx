import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function InterviewSetup() {
  const navigate = useNavigate();
  const [role, setRole] = useState('sde');
  const [type, setType] = useState('technical');
  const [level, setLevel] = useState('Medium');

  const handleLaunch = (e) => {
    e.preventDefault();
    navigate('/interview', { 
      state: { role, type, level } 
    });
  };

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      
      {/* TopNavBar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto font-['Inter'] antialiased">
          <Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">AI Interview Pro</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200" to="/dashboard">Dashboard</Link>
            <Link className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200" to="/history">History</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 dark:text-gray-400 hover:text-blue-700 active:scale-95 transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link to="/profile" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 active:scale-95 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center p-gutter">
        <div className="w-full max-w-[600px] mb-margin">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-primary-container -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-md shadow-lg">1</div>
              <span className="mt-xs font-label-sm text-label-sm text-primary">Setup</span>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">2</div>
              <span className="mt-xs font-label-sm text-label-sm text-on-surface-variant">Check</span>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">3</div>
              <span className="mt-xs font-label-sm text-label-sm text-on-surface-variant">Start</span>
            </div>
          </div>
        </div>

        <section className="w-full max-w-[600px] bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-margin border border-surface-variant/20">
          <div className="mb-lg">
            <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Configure Interview</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Tailor your practice session to your career goals.</p>
          </div>
          <form onSubmit={handleLaunch} className="space-y-md">
            <div className="space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant ml-xs">Target Role</label>
              <div className="relative group">
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg px-4 font-body-md text-on-surface appearance-none focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                >
                  <option value="SDE">SDE</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="ML Engineer">ML Engineer</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <div className="space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant ml-xs">Interview Type</label>
              <div className="relative group">
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg px-4 font-body-md text-on-surface appearance-none focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                >
                  <option value="HR">HR</option>
                  <option value="Technical">Technical</option>
                  <option value="Mixed">Mixed</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <div className="space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant ml-xs">Difficulty Level</label>
              <div className="flex bg-surface-container-low p-1 rounded-xl border border-outline-variant">
                {['Easy', 'Medium', 'Hard'].map((l) => (
                  <button 
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`flex-1 py-2 rounded-lg font-label-md text-label-md transition-colors ${level === l ? 'bg-primary-container text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container'}`}
                    type="button"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-md">
              <button 
                type="submit"
                className="w-full h-14 bg-primary-container text-on-primary rounded-xl font-headline-md text-[18px] shadow-[0_4px_20px_rgba(25,118,210,0.15)] hover:shadow-[0_8px_24px_rgba(25,118,210,0.25)] active:scale-[0.98] transition-all flex items-center justify-center gap-sm"
              >
                <span>Launch Interview</span>
                <span className="material-symbols-outlined">rocket_launch</span>
              </button>
            </div>
          </form>
        </section>

        <div className="mt-lg flex items-start gap-md max-w-[600px] p-md bg-surface-container-low rounded-xl border-l-4 border-primary">
          <span className="material-symbols-outlined text-primary">lightbulb</span>
          <div>
            <h4 className="font-label-md text-label-md text-on-surface">Pro Tip</h4>
            <p className="font-body-md text-body-md text-on-secondary-fixed-variant opacity-80">Choosing "Mixed" difficulty provides a realistic balance between behavioral questions and technical problem solving.</p>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <Link to="/dashboard" className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 font-['Inter'] text-[10px] font-semibold active:scale-90 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined mb-1">dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 font-['Inter'] text-[10px] font-semibold active:scale-90 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined mb-1">history</span>
          <span>History</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 font-['Inter'] text-[10px] font-semibold active:scale-90 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined mb-1">person</span>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
