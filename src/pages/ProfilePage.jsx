import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();

  // Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [profileName, setProfileName] = useState('Alex Johnson');
  const [profileEmail, setProfileEmail] = useState('alex.johnson@example.com');
  const [tempName, setTempName] = useState(profileName);
  const [tempEmail, setTempEmail] = useState(profileEmail);

  // Preferences State
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Apply dark mode on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setProfileName(tempName);
      setProfileEmail(tempEmail);
    } else {
      // Setup editing
      setTempName(profileName);
      setTempEmail(profileEmail);
    }
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTempName(profileName);
    setTempEmail(profileEmail);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface dark:bg-gray-900 dark:text-gray-100 selection:bg-primary-fixed min-h-screen pb-24 md:pb-0 transition-colors duration-300">
      
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">AI Interview Pro</Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-headline-md text-[16px]" to="/dashboard">Dashboard</Link>
            <Link className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-headline-md text-[16px]" to="/history">History</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link to="/profile" className="p-2 text-primary bg-primary-fixed dark:bg-blue-900/40 dark:text-blue-300 rounded-full transition-transform active:scale-95">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="font-headline-lg text-headline-lg text-on-background dark:text-white">Your Profile</h1>
          <p className="text-on-surface-variant dark:text-gray-400 font-body-lg mt-1">Manage your account details and preferences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Avatar & Basic Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 relative overflow-hidden ai-glow transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary-fixed to-secondary-fixed dark:from-blue-900/40 dark:to-teal-900/40 opacity-50 z-0"></div>
              
              <div className="relative z-10 w-28 h-28 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md mb-4 mt-8 transition-colors duration-300">
                <div className="w-full h-full bg-primary-container dark:bg-blue-900/60 text-on-primary-container dark:text-blue-200 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-[64px] opacity-80" style={{fontVariationSettings:"'FILL' 1"}}>person</span>
                </div>
              </div>

              {isEditing ? (
                <div className="w-full space-y-3 relative z-10 mb-4">
                  <input 
                    type="text" 
                    value={tempName} 
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full text-center px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-primary font-headline-md text-headline-md"
                    placeholder="Full Name"
                    autoFocus
                  />
                  <input 
                    type="email" 
                    value={tempEmail} 
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="w-full text-center px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-primary font-body-sm"
                    placeholder="Email Address"
                  />
                </div>
              ) : (
                <div className="relative z-10 mb-4">
                  <h2 className="font-headline-md text-headline-md text-on-background dark:text-white">{profileName}</h2>
                  <p className="text-on-surface-variant dark:text-gray-400 font-body-sm mt-1">{profileEmail}</p>
                </div>
              )}

              {isEditing ? (
                <div className="w-full flex gap-2 relative z-10">
                  <button 
                    onClick={handleCancelEdit}
                    className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-label-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleEditToggle}
                    className="flex-1 py-2 bg-primary text-white rounded-xl font-label-md hover:bg-primary/90 transition-colors"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleEditToggle}
                  className="w-full py-2 bg-primary-fixed dark:bg-blue-900/40 text-on-primary-fixed dark:text-blue-300 rounded-xl font-label-md hover:bg-primary hover:text-white transition-colors relative z-10"
                >
                  Edit Profile
                </button>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-sm p-6 border border-gray-100 dark:border-gray-700 ai-glow transition-colors duration-300">
              <h3 className="font-headline-md text-[18px] mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 dark:text-white">Account Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant dark:text-gray-400 font-body-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">verified</span> Plan
                  </span>
                  <span className="font-label-md text-primary dark:text-blue-300 bg-primary-fixed dark:bg-blue-900/40 px-2 py-1 rounded-md">Pro</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant dark:text-gray-400 font-body-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span> Joined
                  </span>
                  <span className="font-label-md dark:text-gray-200">Oct 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Settings & Actions */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-sm p-8 border border-gray-100 dark:border-gray-700 ai-glow transition-colors duration-300">
              <h3 className="font-headline-md text-headline-md mb-6 dark:text-white">Preferences</h3>
              
              <div className="space-y-6">
                <div 
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-surface-container-low dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <div>
                    <h4 className="font-label-md text-label-md dark:text-white transition-colors duration-300">Email Notifications</h4>
                    <p className="text-on-surface-variant dark:text-gray-400 font-body-sm mt-1 transition-colors duration-300">Receive weekly progress reports and tips.</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${emailNotifications ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}>
                    <div className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all duration-300 ${emailNotifications ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>

                <div 
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-surface-container-low dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <div>
                    <h4 className="font-label-md text-label-md dark:text-white transition-colors duration-300">Dark Mode</h4>
                    <p className="text-on-surface-variant dark:text-gray-400 font-body-sm mt-1 transition-colors duration-300">Automatically match system theme.</p>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${darkMode ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}>
                    <div className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all duration-300 ${darkMode ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-error/10 dark:bg-red-900/10 rounded-[24px] shadow-sm p-8 border border-error/20 dark:border-red-900/30 transition-colors duration-300">
              <h3 className="font-headline-md text-headline-md text-error dark:text-red-400 mb-2">Danger Zone</h3>
              <p className="text-on-surface-variant dark:text-gray-400 font-body-sm mb-6">These actions cannot be undone. Please proceed with caution.</p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleLogout}
                  className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-on-surface dark:text-white rounded-xl font-label-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                  Log out of this device
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 transition-colors duration-300">
        <Link className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150" to="/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-['Inter'] text-[10px] font-semibold">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150" to="/history">
          <span className="material-symbols-outlined">history</span>
          <span className="font-['Inter'] text-[10px] font-semibold">History</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl px-4 py-1 active:scale-90 transition-all duration-150" to="/profile">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] font-semibold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
