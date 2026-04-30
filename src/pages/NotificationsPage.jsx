import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Mock Interview Available', description: 'A new FAANG-level system design interview is now available for your track.', time: '2h ago', read: false, icon: 'campaign', category: 'Announcement' },
    { id: 2, title: 'Your feedback is ready', description: 'Analysis for your "Behavioral Drill" session on Oct 24 is complete. You scored 8.5/10.', time: '5h ago', read: true, icon: 'analytics', category: 'Feedback' },
    { id: 3, title: 'Upcoming Interview Reminder', description: 'Your scheduled mock interview with AI is starting in 30 minutes.', time: '1d ago', read: true, icon: 'event', category: 'Reminder' },
    { id: 4, title: 'System Update', description: 'We have updated our AI models to provide more accurate coding analysis.', time: '2d ago', read: true, icon: 'update', category: 'System' },
    { id: 5, title: 'New Achievement!', description: 'You have completed 10 interviews this month. Keep it up!', time: '3d ago', read: true, icon: 'emoji_events', category: 'Achievement' },
  ]);

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    return true;
  });

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="bg-surface font-body-md text-on-surface dark:bg-gray-900 dark:text-gray-100 selection:bg-primary-fixed min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-background dark:text-white mb-2">Notifications</h1>
            <p className="text-on-surface-variant dark:text-gray-400 font-body-lg">Stay updated with your interview progress and platform news.</p>
          </div>
          <button 
            onClick={markAllAsRead}
            className="px-4 py-2 bg-primary-fixed dark:bg-blue-900/40 text-on-primary-fixed dark:text-blue-300 rounded-xl font-label-md hover:bg-primary hover:text-white transition-all text-sm whitespace-nowrap"
          >
            Mark all as read
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden ai-glow">
          <div className="flex border-b border-gray-100 dark:border-gray-700">
            <button 
              onClick={() => setFilter('all')}
              className={`flex-1 py-4 font-label-md text-sm transition-all relative ${filter === 'all' ? 'text-primary dark:text-blue-400' : 'text-gray-500'}`}
            >
              All Notifications
              {filter === 'all' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary dark:bg-blue-400"></div>}
            </button>
            <button 
              onClick={() => setFilter('unread')}
              className={`flex-1 py-4 font-label-md text-sm transition-all relative ${filter === 'unread' ? 'text-primary dark:text-blue-400' : 'text-gray-500'}`}
            >
              Unread
              {filter === 'unread' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary dark:bg-blue-400"></div>}
            </button>
          </div>

          <div className="divide-y divide-gray-50 dark:divide-gray-700">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((n) => (
                <div 
                  key={n.id} 
                  className={`p-6 flex gap-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group ${!n.read ? 'bg-blue-50/20 dark:bg-blue-900/10' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${!n.read ? 'bg-primary-container dark:bg-blue-900/40 text-primary dark:text-blue-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    <span className="material-symbols-outlined text-[24px]">{n.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-primary dark:text-blue-400">{n.category}</span>
                      <span className="text-xs text-outline dark:text-gray-500">{n.time}</span>
                    </div>
                    <h3 className={`text-[16px] mb-1 ${!n.read ? 'font-bold' : 'font-semibold'} text-on-surface dark:text-white`}>{n.title}</h3>
                    <p className="text-sm text-on-surface-variant dark:text-gray-400 leading-relaxed">{n.description}</p>
                    
                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!n.read && (
                        <button 
                          onClick={() => markAsRead(n.id)}
                          className="text-xs font-bold text-primary dark:text-blue-400 hover:underline"
                        >
                          Mark as read
                        </button>
                      )}
                      <button 
                        onClick={() => deleteNotification(n.id)}
                        className="text-xs font-bold text-error dark:text-red-400 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {!n.read && (
                    <div className="w-2.5 h-2.5 bg-primary dark:bg-blue-400 rounded-full mt-1"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-5xl">notifications_off</span>
                </div>
                <h3 className="font-headline-md text-gray-400">No notifications found</h3>
                <p className="text-gray-400 text-sm mt-1">Check back later for updates.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="text-primary dark:text-blue-400 font-label-md hover:underline flex items-center gap-2 mx-auto">
            <span className="material-symbols-outlined text-[18px]">settings</span>
            Notification Settings
          </button>
        </div>
      </main>
    </div>
  );
}
