import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { startInterviewSession, getNextQuestion } from '../services/aiService';

export default function InterviewInterface() {
  const location = useLocation();
  const { role = 'SDE', type = 'Technical', level = 'Medium' } = location.state || {};

  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Interview
  useEffect(() => {
    const initInterview = async () => {
      setIsThinking(true);
      try {
        const response = await startInterviewSession(role, level, type);
        const aiMsg = { id: Date.now(), role: 'ai', text: response.message };
        setMessages([aiMsg]);
        setChatHistory([{ role: "model", parts: [{ text: response.message }] }]);
      } catch (error) {
        console.error("AI Init Error:", error);
        setMessages([{ 
          id: 1, 
          role: 'ai', 
          text: `Connection Error: ${error.message || "Unknown error"}. Please check the browser console (F12) for more details.` 
        }]);
      } finally {
        setIsThinking(false);
      }
    };
    initInterview();
  }, [role, level, type]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!currentText.trim() || isThinking || isComplete) return;

    const userText = currentText.trim();
    const userMsg = { id: Date.now(), role: 'user', text: userText };
    
    setMessages(prev => [...prev, userMsg]);
    setCurrentText("");
    setIsThinking(true);

    try {
      const response = await getNextQuestion(chatHistory, userText, role, level, type);
      
      const aiMsg = { id: Date.now() + 1, role: 'ai', text: response.message };
      setMessages(prev => [...prev, aiMsg]);
      
      // Update history for Gemini
      setChatHistory(prev => [
        ...prev, 
        { role: "user", parts: [{ text: userText }] },
        { role: "model", parts: [{ text: response.message }] }
      ]);

      if (response.isComplete) {
        setIsComplete(true);
      }
    } catch (error) {
      console.error("AI Reply Error:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: "I'm sorry, I encountered an error processing your response." }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed min-h-screen">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-6 h-16 max-w-7xl mx-auto font-['Inter'] antialiased">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-400">AI Interview Pro</Link>
            <div className="h-6 w-px bg-outline-variant hidden md:block"></div>
            <h1 className="font-headline-md text-on-surface-variant hidden md:block text-sm">{type} Interview - {role} ({level})</h1>
          </div>
          <div className="flex items-center gap-margin">
            <div className="flex items-center gap-xs bg-error-container text-on-error-container px-sm py-xs rounded-lg font-label-md">
              <span className="material-symbols-outlined text-sm">timer</span>
              <span>LIVE</span>
            </div>
            <Link to="/profile" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">account_circle</Link>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-[180px] min-h-screen max-w-4xl mx-auto px-gutter flex flex-col">
        <section className="flex-grow space-y-lg py-lg">
          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-sm max-w-[85%] animate-fade-in mx-1 ${msg.role === 'user' ? 'flex-row-reverse ml-auto' : ''}`}>
              <div className={`w-lg h-lg rounded-full overflow-hidden flex-shrink-0 border ${msg.role === 'ai' ? 'bg-surface-container border-outline-variant' : 'bg-primary-container border-transparent'}`}>
                <img 
                  alt={msg.role === 'ai' ? "AI" : "User"} 
                  className="w-full h-full object-cover" 
                  src={msg.role === 'ai' ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDZcvHnV6d51hhnAhn_dshtUlmKF8yCE2zLaRSS9Dt86Vl1RK9lSZFt-4ZW3pmv4zORU3rM5S9Ils_wj1WdchBo_beMy9lfMEyW_Y9vlprXYXhS8U57umXmvIdKE1shYg0l_D9VuJSRYx5EKC4YJICd8eIh4jwQFbSEl0IHGZ5MYp0vDVhjAy0i8WOSyHZDbrXgjJv7gv5d2eOS_1ZOp_SF24iB0LNZaz5TLKZkSsMA4uXnsCoEHsFpNYBfjDHUGzSl0oKtaCN1gK9r" : "https://lh3.googleusercontent.com/aida-public/AB6AXuBOzFnQqu8zqYsRzqffrm_LGdylOk02eJbIN34ktWH5Oc1ExiyILvKzlHTXrCF_um9gDXTB_28FNUSh7NW9b_irF-IbjHRB0Fk-hxJlzakw6x0SVSsbo5mYwqGxc6xPH15R2rIaleoAU54kiJ4-zvBTtjcg13lGYndauVSaX8LJ9UwFTkY93FB_OsFblD8mi5xy2gp2zK2OB2RroafdxuxfI6rDBUn4HLDk014paVV61ggmESD65x8nebbUyc9EyuJKT5MDPKcmRtet"} 
                />
              </div>
              <div className={`space-y-xs ${msg.role === 'user' ? 'flex flex-col items-end' : ''}`}>
                <span className="font-label-sm text-outline px-xs">{msg.role === 'ai' ? 'Interviewer' : 'You'}</span>
                <div className={`p-md rounded-xl shadow-sm text-on-surface ${msg.role === 'ai' ? 'bg-surface-container-high rounded-tl-none' : 'bg-primary-container rounded-tr-none text-on-primary-container'}`}>
                  <p className="font-body-md leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex gap-sm max-w-[85%] animate-fade-in mx-1">
              <div className="w-lg h-lg rounded-full overflow-hidden flex-shrink-0 bg-surface-container border border-outline-variant">
                <img alt="AI" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJpuiX23kNCyfzv0kjletsq00d04auj6CoTgMHuLuLJ23t1nmoMYWzreuBNdIO8N45NsOXiaxpmAUH0ID8WmFmz9_gFDHtiXRJsor0ZmG4solEM0Pm_0jMqE3UNVEk_knRgQDd7lKjl3-psUUr7w1YZ-UBS61BNO-FiZqbLdEk3A6DIRQu-WAQd96_gmriV__hHkCKPmR9-BNE_9qMcksr0rScIH4AiFwNSx71REX7c--mMT8_Utu8bjVHz-ntpuXtGrnLREqwO7JG" />
              </div>
              <div className="space-y-xs">
                <div className="bg-surface-container-high px-md py-sm rounded-xl rounded-tl-none flex items-center gap-xs">
                  <div className="w-1.5 h-1.5 bg-outline rounded-full thinking-dot"></div>
                  <div className="w-1.5 h-1.5 bg-outline rounded-full thinking-dot" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-outline rounded-full thinking-dot" style={{ animationDelay: '0.4s' }}></div>
                  <span className="font-label-sm text-outline ml-sm italic">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-4xl mx-auto px-gutter py-md space-y-md">
          <form onSubmit={handleSend} className="flex items-center gap-sm">
            <div className="relative flex-grow">
              <input 
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container rounded-xl px-md py-sm pr-12 font-body-md text-on-surface" 
                placeholder={isComplete ? "Interview complete" : "Type your answer here..."} 
                type="text" 
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
                autoComplete="off"
                disabled={isThinking || isComplete}
              />
              <button 
                type="submit"
                disabled={!currentText.trim() || isThinking || isComplete}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-container hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
            <button type="button" className="w-14 h-14 bg-error text-on-error rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform relative overflow-hidden group flex-shrink-0">
              <div className="absolute inset-0 bg-white/20 animate-ping rounded-full scale-110"></div>
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
            </button>
          </form>

          <div className="flex justify-between items-center pt-xs">
            <Link to="/feedback" className="px-md py-sm text-error font-label-md flex items-center gap-xs hover:bg-error-container/20 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-sm">cancel</span>
              {isComplete ? "View Results" : "End Session"}
            </Link>
            {isComplete && (
              <span className="text-primary font-bold animate-pulse">Session Complete!</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
