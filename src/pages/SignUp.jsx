import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-fixed/30 via-surface to-surface">
      <div className="w-full max-w-md bg-white rounded-[24px] shadow-xl p-8 border border-white/50 ai-glow relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <Link to="/" className="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-400 mb-2 inline-block">AI Interview Pro</Link>
          <h1 className="font-headline-md text-headline-md mt-4">Create an account</h1>
          <p className="text-on-surface-variant mt-2 font-body-md">Start your journey to interview mastery.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md" 
              placeholder="Jane Doe" 
            />
          </div>

          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md" 
              placeholder="name@example.com" 
            />
          </div>

          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md" 
              placeholder="••••••••" 
            />
          </div>

          <button type="submit" className="w-full py-3 mt-2 bg-primary text-on-primary rounded-xl font-headline-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-md">
            Sign up
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 relative z-10">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="font-label-sm text-outline">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button 
          onClick={handleGoogleSignup} 
          className="w-full py-3 bg-white border border-gray-200 text-on-surface rounded-xl font-headline-md text-label-md hover:bg-surface-container transition-all flex items-center justify-center gap-2 relative z-10"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <p className="mt-8 text-center font-body-sm text-on-surface-variant relative z-10">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
