import React from 'react';
import { Link } from 'react-router-dom';

export default function PerformanceFeedback() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      
{/* TopNavBar (Shared Component) */}
<header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40">
<div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto">
<Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400 font-['Inter'] antialiased">AI Interview Pro</Link>
<nav className="hidden md:flex items-center space-x-8">
<Link className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-['Inter']" to="/dashboard">Dashboard</Link>
<Link className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1 font-['Inter']" to="/history">History</Link>
</nav>
<div className="flex items-center space-x-4">
<button className="material-symbols-outlined text-gray-600 active:scale-95 transition-transform">notifications</button>
<Link to="/profile" className="material-symbols-outlined text-gray-600 active:scale-95 transition-transform flex items-center justify-center">account_circle</Link>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-margin pt-lg">
{/* Score Section */}
<section className="flex flex-col items-center justify-center text-center mb-xl">
<div className="relative w-48 h-48 rounded-full score-ring flex items-center justify-center mb-sm shadow-xl">
<div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center">
<span className="font-headline-xl text-primary leading-none">8.5</span>
<span className="font-label-md text-outline">OUT OF 10</span>
</div>
</div>
<h1 className="font-headline-lg text-on-background mb-xs">Excellent Performance!</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl">Your technical proficiency is strong. Focusing on structured delivery for behavioral questions will elevate your results.</p>
</section>
{/* Bento Grid Insights */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
{/* Key Strengths Card */}
<div className="md:col-span-6 bg-surface-container-lowest p-margin rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-primary">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<h2 className="font-headline-md text-on-surface">Key Strengths</h2>
</div>
<ul className="space-y-sm">
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-primary text-sm mt-1" data-icon="task_alt">task_alt</span>
<p className="font-body-md text-on-surface-variant">Exceptional clarity in explaining complex architectural decisions.</p>
</li>
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-primary text-sm mt-1" data-icon="task_alt">task_alt</span>
<p className="font-body-md text-on-surface-variant">Strong alignment with the STAR method in behavioral responses.</p>
</li>
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-primary text-sm mt-1" data-icon="task_alt">task_alt</span>
<p className="font-body-md text-on-surface-variant">Confident and professional non-verbal communication.</p>
</li>
</ul>
</div>
{/* Areas for Improvement Card */}
<div className="md:col-span-6 bg-surface-container-lowest p-margin rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-tertiary">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-tertiary" data-icon="error" style={{"fontVariationSettings":"'FILL' 1"}}>error</span>
<h2 className="font-headline-md text-on-surface">Areas for Improvement</h2>
</div>
<ul className="space-y-sm">
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-tertiary text-sm mt-1" data-icon="warning">warning</span>
<p className="font-body-md text-on-surface-variant">Avoid filler words during transitions (e.g., "umm", "like").</p>
</li>
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-tertiary text-sm mt-1" data-icon="warning">warning</span>
<p className="font-body-md text-on-surface-variant">Provide more specific metrics when discussing project outcomes.</p>
</li>
<li className="flex items-start gap-sm">
<span className="material-symbols-outlined text-tertiary text-sm mt-1" data-icon="warning">warning</span>
<p className="font-body-md text-on-surface-variant">Maintain a slightly slower pace for highly technical segments.</p>
</li>
</ul>
</div>
{/* Suggested Ideal Answer Section */}
<div className="md:col-span-12 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="p-margin border-b border-outline-variant bg-surface-container-low">
<h2 className="font-headline-md text-on-surface">Comparative Analysis: "Why should we hire you?"</h2>
</div>
<div className="grid md:grid-cols-2">
<div className="p-margin border-r border-outline-variant">
<div className="flex items-center gap-xs mb-sm">
<span className="font-label-sm text-outline uppercase tracking-wider">Your Transcript</span>
</div>
<p className="font-body-md text-on-surface-variant italic">
                            "Umm, I think you should hire me because I have like 5 years of experience in React and I've worked on some big teams. I'm really good at solving problems and I enjoy collaborating with others..."
                        </p>
</div>
<div className="p-margin bg-primary-fixed/20">
<div className="flex items-center gap-xs mb-sm">
<span className="font-label-sm text-primary uppercase tracking-wider">AI Suggested Improvement</span>
</div>
<p className="font-body-md text-on-primary-fixed">
                            "With five years of specialized React experience, I offer both technical depth and a proven track record of delivering scalable solutions in high-growth teams. I excel at bridging the gap between product requirements and technical execution, as evidenced by my recent lead role in..."
                        </p>
</div>
</div>
</div>
{/* Actionable Tips Card */}
<div className="md:col-span-12 bg-secondary-container/30 p-margin rounded-xl flex flex-col md:flex-row items-center gap-lg border border-secondary-container">
<div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="lightbulb">lightbulb</span>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-on-secondary-container mb-xs">Pro Tip: The Power Pause</h3>
<p className="font-body-md text-on-secondary-container">Before answering a difficult question, take a 2-second pause. This shows confidence, allows you to structure your thoughts, and eliminates initial filler words.</p>
</div>
<div className="flex-shrink-0">
<Link to="/setup" className="px-md py-sm bg-primary text-on-primary font-label-md rounded-xl shadow-md hover:scale-[1.02] active:scale-95 transition-all">
                        Try Another Session
                    </Link>
</div>
</div>
</div>
{/* Footer Action */}
<div className="flex justify-center mt-xl">
<Link to="/dashboard" className="flex items-center gap-sm px-xl py-md bg-white text-primary border border-primary font-headline-md rounded-xl shadow-sm hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                Return to Dashboard
            </Link>
</div>
</main>
{/* BottomNavBar (Shared Component - Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
<div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150 font-['Inter'] text-[10px] font-semibold">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</div>
<Link to="/history" className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150 font-['Inter'] text-[10px] font-semibold">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span>History</span>
</Link>
<Link to="/profile" className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150 font-['Inter'] text-[10px] font-semibold">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span>Profile</span>
</Link>
</nav>

    </div>
  );
}
