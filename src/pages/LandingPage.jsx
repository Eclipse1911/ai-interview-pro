import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      
{/* Top Navigation Bar */}
<header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-[100]">
<div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto">
<div className="flex items-center gap-8">
<Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">AI Interview Pro</Link>
<nav className="hidden md:flex items-center gap-6">
<Link className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1 font-headline-md text-label-md" to="/dashboard">Dashboard</Link>
<Link className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-headline-md text-label-md" to="/history">History</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<Link to="/profile" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">account_circle</Link>
</div>
</div>
</header>
<main className="w-full">
{/* Hero Section */}
<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full mb-6">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
<span className="font-label-sm text-label-sm">New: Advanced System Design Tracks</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 leading-tight">
                            Master Your Next <br/>Interview with <span className="text-primary">AI</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
                            Simulate real interview experiences and get instant AI-based feedback. Practice with confidence across 50+ technical domains.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<Link to="/setup" className="px-8 py-4 bg-primary-container text-on-primary-container rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all font-headline-md text-label-md flex items-center gap-2">
                                Start Interview
                                <span className="material-symbols-outlined">arrow_forward</span>
</Link>
<Link to="/dashboard" className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-xl hover:bg-opacity-80 active:scale-95 transition-all font-headline-md text-label-md">
                                View Dashboard
</Link>
</div>
</div>
<div className="flex-1 relative">
{/* AI Video Feed Representation */}
<div className="relative bg-surface-container rounded-[24px] overflow-hidden shadow-[0_12px_32px_rgba(25,118,210,0.1)] border-4 border-white/50">
<img alt="Professional woman in a business meeting setting" className="w-full h-[400px] object-cover" data-alt="Professional woman looking directly at camera with a neutral supportive expression in a clean modern office setting with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYsUSz5WNfMbrV8y3sw3E1Nxtlsf9Nl0PNGgQj9P1rpYIRdbhvoxaUIO38gD-DlPMth-xoroSeWEAj7v4txClw1HaRsRiOK93qpCtF5OKD3PEo1KV9ftv4fMz1wNG2AnPsTeNcUJ6OvudCyW2qSvvcKE3TWeLU06M6BSfvJsYVdNqNPLIRhOkQa53eoBAf45U6mcPcwBfOefmY-JHVTwgOOW_LCv0zkhbLB7Gj6lQJN1QXX1o4t2mpPE2i-zbPxtIZnWZs14URdjX"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ring-4 ring-primary/30">
<span className="material-symbols-outlined text-white" style={{"fontVariationSettings":"'FILL' 1"}}>graphic_eq</span>
</div>
<div>
<p className="text-white font-label-md">AI Interviewer</p>
<p className="text-white/70 text-label-sm">Processing response...</p>
</div>
</div>
<div className="px-3 py-1 bg-error rounded-lg flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="text-white font-label-sm">LIVE</span>
</div>
</div>
</div>
{/* Decorative elements */}
<div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-fixed rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-fixed rounded-full blur-3xl opacity-50 -z-10"></div>
</div>
</div>
</div>
</section>
{/* Feature Bento Grid Section */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Precision Feedback at Scale</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                        Our AI models analyze thousands of data points to provide you with the same level of feedback as a principal engineer or hiring manager.
                    </p>
</div>
<div className="bento-grid">
{/* Feature 1: Interaction */}
<div className="col-span-12 md:col-span-8 bg-white rounded-2xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-primary">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[28px]">mic</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Real-time Voice &amp; Text</h3>
<p className="font-body-md text-on-surface-variant mb-6">
                                    Engage in a natural dialogue. Our low-latency engine supports fluid verbal communication and integrated coding environments for a full-spectrum experience.
                                </p>
</div>
<div className="bg-surface-container rounded-xl p-4 flex gap-4 overflow-x-auto">
<div className="flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow-sm font-label-sm">Python</div>
<div className="flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow-sm font-label-sm">React</div>
<div className="flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow-sm font-label-sm">System Design</div>
<div className="flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow-sm font-label-sm">SQL</div>
</div>
</div>
</div>
{/* Feature 2: Analysis */}
<div className="col-span-12 md:col-span-4 bg-white rounded-2xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
<div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary mb-6">
<span className="material-symbols-outlined text-[28px]">psychology</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Deep Analysis</h3>
<p className="font-body-md text-on-surface-variant">
                            Detailed HR behavioral scoring and technical accuracy checks across every sentence you speak.
                        </p>
<div className="mt-8 space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-md">Technical Depth</span>
<span className="text-primary font-bold">92%</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full">
<div className="h-full bg-primary rounded-full w-[92%]"></div>
</div>
</div>
</div>
{/* Feature 3: Graphs */}
<div className="col-span-12 md:col-span-4 bg-white rounded-2xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
<div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[28px]">trending_up</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Growth Graphs</h3>
<p className="font-body-md text-on-surface-variant">
                            Personalized improvement tracking to visualize your journey from junior to lead candidate.
                        </p>
<div className="mt-6 flex items-end gap-1 h-24">
<div className="flex-1 bg-secondary-fixed-dim rounded-t-sm h-[30%]"></div>
<div className="flex-1 bg-secondary-fixed-dim rounded-t-sm h-[45%]"></div>
<div className="flex-1 bg-secondary-fixed-dim rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-secondary-fixed-dim rounded-t-sm h-[85%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[100%]"></div>
</div>
</div>
{/* Feature 4: Integration (Asymmetric block) */}
<div className="col-span-12 md:col-span-8 bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
<div className="flex-1">
<h3 className="font-headline-md text-headline-md mb-4">Ready to level up your career?</h3>
<p className="opacity-90 mb-6">Join 10,000+ candidates who secured offers at FAANG and top startups using our platform.</p>
<Link to="/signup" className="px-6 py-3 bg-white text-primary rounded-xl font-headline-md text-label-md hover:bg-surface-container transition-colors inline-block text-center">Create Free Account</Link>
</div>
<div className="w-full md:w-1/3 flex justify-center">
<span className="material-symbols-outlined text-[120px] opacity-20">rocket_launch</span>
</div>
</div>
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
</div>
</div>
</div>
</section>
{/* Stats Section */}
<section className="py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="font-headline-xl text-headline-xl text-primary">500k+</p>
<p className="font-label-md text-on-surface-variant">Mock Interviews Conducted</p>
</div>
<div className="text-center">
<p className="font-headline-xl text-headline-xl text-primary">98%</p>
<p className="font-label-md text-on-surface-variant">User Satisfaction</p>
</div>
<div className="text-center">
<p className="font-headline-xl text-headline-xl text-primary">120+</p>
<p className="font-label-md text-on-surface-variant">Interview Formats</p>
</div>
<div className="text-center">
<p className="font-headline-xl text-headline-xl text-primary">15min</p>
<p className="font-label-md text-on-surface-variant">Avg. Feedback Time</p>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-100 py-12 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400 mb-2">AI Interview Pro</span>
<p className="text-label-sm text-on-surface-variant">Empowering candidates with AI-driven confidence.</p>
</div>
<div className="flex gap-8">
<Link className="text-label-sm text-on-surface-variant hover:text-primary" to="/privacy">Privacy Policy</Link>
<Link className="text-label-sm text-on-surface-variant hover:text-primary" to="/terms">Terms of Service</Link>
<Link className="text-label-sm text-on-surface-variant hover:text-primary" to="/support">Contact Support</Link>
</div>
</div>
</div>
</footer>
{/* Bottom Navigation Bar (Mobile only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
<Link className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl px-4 py-1 active:scale-90 transition-all duration-150" to="/">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['Inter'] text-[10px] font-semibold">Dashboard</span>
</Link>
<Link className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150" to="/history">
<span className="material-symbols-outlined">history</span>
<span className="font-['Inter'] text-[10px] font-semibold">History</span>
</Link>
<Link className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 px-4 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-90 transition-all duration-150" to="/profile">
<span className="material-symbols-outlined">person</span>
<span className="font-['Inter'] text-[10px] font-semibold">Profile</span>
</Link>
</nav>
{/* Floating Action Button */}
<button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
<span className="material-symbols-outlined text-[32px]" style={{"fontVariationSettings":"'FILL' 1"}}>add</span>
</button>

    </div>
  );
}
