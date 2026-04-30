import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Mock Interview Available', time: '2h ago', read: false, icon: 'campaign' },
    { id: 2, title: 'Your feedback for System Design is ready', time: '5h ago', read: true, icon: 'analytics' },
    { id: 3, title: 'Upcoming Interview Reminder', time: '1d ago', read: true, icon: 'event' },
  ]);
  
  const notificationRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">AI Interview Pro</Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              className={`${isActive('/dashboard') ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-300'} pb-1 font-headline-md text-[16px] transition-colors duration-200`} 
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link 
              className={`${isActive('/history') ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-300'} pb-1 font-headline-md text-[16px] transition-colors duration-200`} 
              to="/history"
            >
              History
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-transform active:scale-95 relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-gray-50 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-sm dark:text-white">Notifications</h3>
                  <button 
                    onClick={markAllAsRead}
                    className="text-xs text-primary dark:text-blue-400 hover:underline font-label-md"
                  >
                    Mark all as read
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((n) => (
                      <div 
                        key={n.id} 
                        className={`p-4 flex gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b border-gray-50 dark:border-gray-700 last:border-0 ${!n.read ? 'bg-blue-50/30 dark:bg-blue-900/20' : ''}`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${!n.read ? 'bg-primary-container dark:bg-blue-900/40 text-primary dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                          <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${!n.read ? 'font-semibold' : 'font-normal'} text-on-surface dark:text-white`}>{n.title}</p>
                          <p className="text-xs text-outline dark:text-gray-400 mt-1">{n.time}</p>
                        </div>
                        {!n.read && (
                          <div className="w-2 h-2 bg-primary dark:bg-blue-400 rounded-full self-center"></div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-400">
                      <span className="material-symbols-outlined text-4xl mb-2">notifications_off</span>
                      <p className="text-sm">No notifications yet</p>
                    </div>
                  )}
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 text-center">
                  <Link 
                    to="/notifications" 
                    onClick={() => setShowNotifications(false)}
                    className="text-sm font-label-md text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-300 transition-colors block w-full"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/profile" className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-transform active:scale-95 flex items-center justify-center">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
