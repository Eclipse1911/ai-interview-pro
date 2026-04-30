import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      
{/* TopNavBar */}
<header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto">
<Link to="/" className="text-xl font-bold tracking-tight text-blue-700">AI Interview Pro</Link>
<nav className="hidden md:flex items-center space-x-8">
<Link className="text-blue-700 border-b-2 border-blue-700 pb-1 font-headline-md text-[16px]" to="/">Dashboard</Link>
<Link className="text-gray-600 font-medium hover:text-blue-800 transition-colors duration-200 font-headline-md text-[16px]" to="/history">History</Link>
</nav>
<div className="flex items-center space-x-4">
<button className="p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-transform active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<Link to="/profile" className="p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-transform active:scale-95 flex items-center justify-center">
<span className="material-symbols-outlined">account_circle</span>
</Link>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 py-10">
{/* Welcome Header */}
<div className="mb-10">
<h1 className="font-headline-lg text-headline-lg text-on-background mb-2">Welcome back, Alex!</h1>
<p className="text-on-surface-variant font-body-lg">You've completed 12 mock interviews this month. You're in the top 5% of candidates.</p>
</div>
<div className="bento-grid">
{/* Skill Breakdown (Top Left - Column Span 4) */}
<section className="col-span-12 lg:col-span-4 bg-white p-6 rounded-[16px] ai-glow border-l-4 border-primary">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-md text-headline-md">Skill Breakdown</h2>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Problem Solving</span>
<span className="font-label-md text-label-md text-primary">92%</span>
</div>
<div className="w-full bg-secondary-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"92%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Communication</span>
<span className="font-label-md text-label-md text-primary">78%</span>
</div>
<div className="w-full bg-secondary-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"78%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Technical Depth</span>
<span className="font-label-md text-label-md text-primary">85%</span>
</div>
<div className="w-full bg-secondary-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Leadership</span>
<span className="font-label-md text-label-md text-primary">64%</span>
</div>
<div className="w-full bg-secondary-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"64%"}}></div>
</div>
</div>
</div>
</section>
{/* Growth Progress (Top Right - Column Span 8) */}
<section className="col-span-12 lg:col-span-8 bg-white p-6 rounded-[16px] ai-glow relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-md text-headline-md">Growth Progress</h2>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-label-sm font-label-sm">Last 30 Days</span>
</div>
</div>
<div className="h-48 w-full flex items-end justify-between gap-2 px-2">
<div className="group relative flex-1 flex flex-col items-center">
<div className="w-full bg-secondary-container rounded-t-lg transition-all duration-300 group-hover:bg-primary-fixed-dim" style={{"height":"40%"}}></div>
<span className="mt-2 text-label-sm font-label-sm text-outline">W1</span>
</div>
<div className="group relative flex-1 flex flex-col items-center">
<div className="w-full bg-secondary-container rounded-t-lg transition-all duration-300 group-hover:bg-primary-fixed-dim" style={{"height":"55%"}}></div>
<span className="mt-2 text-label-sm font-label-sm text-outline">W2</span>
</div>
<div className="group relative flex-1 flex flex-col items-center">
<div className="w-full bg-primary-container rounded-t-lg transition-all duration-300" style={{"height":"75%"}}></div>
<span className="mt-2 text-label-sm font-label-sm text-on-background">W3</span>
</div>
<div className="group relative flex-1 flex flex-col items-center">
<div className="w-full bg-secondary-container rounded-t-lg transition-all duration-300 group-hover:bg-primary-fixed-dim" style={{"height":"65%"}}></div>
<span className="mt-2 text-label-sm font-label-sm text-outline">W4</span>
</div>
<div className="group relative flex-1 flex flex-col items-center">
<div className="w-full bg-primary-container rounded-t-lg transition-all duration-300" style={{"height":"90%"}}></div>
<span className="mt-2 text-label-sm font-label-sm text-on-background">Today</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
<div className="flex items-center text-primary">
<span className="material-symbols-outlined text-[20px] mr-1">trending_up</span>
<span className="font-label-md text-label-md">15% improvement</span>
</div>
<p className="text-on-surface-variant font-body-md italic text-sm">"Your confidence score in technical questions has peaked this week."</p>
</div>
</section>
{/* Suggested Next Step (Middle Left - Column Span 4) */}
<section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-primary-container p-6 rounded-[16px] text-white ai-glow relative overflow-hidden h-full flex flex-col justify-between">
{/* Background Accent */}
<div className="absolute -right-10 -top-10 opacity-10">
<span className="material-symbols-outlined text-[200px]">rocket_launch</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md mb-2">Suggested Next Step</h2>
<p className="font-body-md opacity-90 mb-6">Ready for a Hard HR interview? Based on your tech scores, focusing on behavioral scenarios is your best path to a FAANG offer.</p>
</div>
<Link to="/setup" className="w-full py-4 bg-white text-primary font-headline-md text-[16px] rounded-[12px] flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform">
                        Start Session
                        <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</section>
{/* Recent Activity (Middle Right - Column Span 8) */}
<section className="col-span-12 lg:col-span-8 bg-white p-6 rounded-[16px] ai-glow">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-md text-headline-md">Recent Activity</h2>
<button className="text-primary font-label-md text-label-md hover:underline">View All</button>
</div>
<div className="space-y-4">
{/* Activity Item */}
<div className="flex items-center justify-between p-4 rounded-[12px] hover:bg-surface-container-low transition-colors group border border-transparent hover:border-gray-100">
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
</div>
{/* Activity Item */}
<div className="flex items-center justify-between p-4 rounded-[12px] hover:bg-surface-container-low transition-colors group border border-transparent hover:border-gray-100">
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
</div>
{/* Activity Item */}
<div className="flex items-center justify-between p-4 rounded-[12px] hover:bg-surface-container-low transition-colors group border border-transparent hover:border-gray-100">
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
</div>
</div>
</section>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50 flex justify-around items-center px-4 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<Link className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-xl px-4 py-1 active:scale-90 transition-all duration-150" to="/">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['Inter'] text-[10px] font-semibold">Dashboard</span>
</Link>
<Link className="flex flex-col items-center justify-center text-gray-500 px-4 py-1 hover:bg-gray-50 active:scale-90 transition-all duration-150" to="/history">
<span className="material-symbols-outlined">history</span>
<span className="font-['Inter'] text-[10px] font-semibold">History</span>
</Link>
<Link className="flex flex-col items-center justify-center text-gray-500 px-4 py-1 hover:bg-gray-50 active:scale-90 transition-all duration-150" to="/profile">
<span className="material-symbols-outlined">person</span>
<span className="font-['Inter'] text-[10px] font-semibold">Profile</span>
</Link>
</nav>
{/* Space for Bottom Nav on Mobile */}
<div className="h-20 md:hidden"></div>

    </div>
  );
}
