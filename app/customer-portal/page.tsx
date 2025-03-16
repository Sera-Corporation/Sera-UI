'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const CustomerPortal = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    category: 'bug-report'
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mood, setMood] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);
  const [activeBubble, setActiveBubble] = useState<number | null>(null);
  const [rotationDegree, setRotationDegree] = useState(0);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Rotate form based on cursor position
  useEffect(() => {
    if (currentSection === 0) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate rotation angle based on cursor position
        const rotateX = ((y / windowHeight) - 0.5) * 5;
        const rotateY = ((x / windowWidth) - 0.5) * -5;
        
        setRotationDegree(rotateY);
        
        const container = document.getElementById('portal-container');
        if (container) {
          container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [currentSection]);

  // Create floating bubbles animation
  useEffect(() => {
    if (currentSection === 0) {
      const intervalId = setInterval(() => {
        const newBubble = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 110 + Math.random() * 10,
          size: 20 + Math.random() * 40,
          opacity: 0.1 + Math.random() * 0.3
        };
        
        setBubbles(prev => [...prev, newBubble]);
        
        // Remove bubbles that have floated out of view
        setTimeout(() => {
          setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
        }, 8000);
      }, 500);
      
      return () => clearInterval(intervalId);
    }
  }, [currentSection]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentSection(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentSection(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const moodEmojis = ['😡', '😕', '😐', '🙂', '😀'];

  const activateBubble = (id: number) => {
    setActiveBubble(id);
    setTimeout(() => setActiveBubble(null), 1000);
  };

  // Percentage for progress bar
  const progressPercentage = (currentSection / 3) * 100;

  // Each section of the form
  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="h-full flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              {bubbles.map(bubble => (
                <div
                  key={bubble.id}
                  className="absolute rounded-full transition-transform border border-gray-200"
                  style={{
                    left: `${bubble.x}%`,
                    bottom: `${bubble.y}%`,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    opacity: bubble.opacity,
                    transform: `translateY(-${(110 - bubble.y) * 3}px) scale(${activeBubble === bubble.id ? 1.5 : 1})`,
                    transition: 'transform 8s linear, opacity 8s linear',
                    zIndex: activeBubble === bubble.id ? 10 : 1
                  }}
                  onClick={() => activateBubble(bubble.id)}
                />
              ))}
            </div>
            <div className="text-center z-10 p-10 rounded-3xl transform transition-all duration-500 border border-gray-200">
              <h1 className="text-4xl font-bold mb-3">
                We're All Ears
              </h1>
              <p className="text-lg mb-8 max-w-md">
                Your thoughts shape our future. Share them in our reimagined feedback experience.
              </p>
              <button
                onClick={handleNext}
                className="px-8 py-4 rounded-full text-lg font-medium border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
              >
                Let's Begin
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Who are you?</h2>
            <p className="mb-8 text-gray-600">Let's get to know each other first</p>
            
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border-b-2 border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-600 group-hover:border-gray-400 transition-all rounded-lg"
                />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border-b-2 border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-600 group-hover:border-gray-400 transition-all rounded-lg"
                />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                className="px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.email}
                className="px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-2">How do you feel?</h2>
            <p className="mb-8 text-gray-600">Your mood matters to us</p>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-full p-6 rounded-2xl border border-gray-200">
                <div className="grid grid-cols-5 gap-4">
                  {moodEmojis.map((emoji, index) => (
                    <button
                      key={index}
                      className={`text-4xl py-4 rounded-xl transition-all ${mood === index ? 'border border-gray-300 transform scale-110 shadow-sm' : 'hover:bg-gray-50'}`}
                      onClick={() => setMood(index)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 px-2 mt-2">
                  <span>Not happy</span>
                  <span>Very satisfied</span>
                </div>
              </div>
              
              <div className="mt-8">
                <label className="block mb-2">What would you like to share?</label>
                <div className="relative group">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-600 group-hover:border-gray-400 transition-all rounded-lg appearance-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  >
                    <option value="bug-report" className="dark:bg-gray-800 dark:text-gray-100">Bug Report</option>
                    <option value="feature-request" className="dark:bg-gray-800 dark:text-gray-100">Feature Request</option>
                    <option value="contact-developer" className="dark:bg-gray-800 dark:text-gray-100">Contact Developer</option>
                    <option value="pitch-idea" className="dark:bg-gray-800 dark:text-gray-100">Pitch an Idea</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                className="px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={mood === null}
                className="px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Tell us more</h2>
            <p className="mb-8 text-gray-600">What's on your mind?</p>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your feedback helps us improve..."
                  rows={6}
                  className="w-full border-b-2 border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-gray-600 hover:border-gray-400 transition-all rounded-lg resize-none"
                />
                
                <div className="absolute top-2 right-2 flex space-x-1">
                  {['bug-report', 'feature-request', 'contact-developer', 'pitch-idea'].map(cat => (
                    <div 
                      key={cat}
                      className={`h-2 rounded-full transition-all border border-gray-300 ${formData.category === cat ? 'w-6' : 'w-2'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className="px-4 py-3 rounded-lg border border-gray-200 flex items-center">
                  <span className="text-2xl mr-2">{mood !== null ? moodEmojis[mood] : '😐'}</span>
                  <span className="text-sm text-gray-500">Your mood</span>
                </div>
                
                <div className="flex-1 px-4 py-3 rounded-lg border border-gray-200">
                  <span className="text-sm text-gray-500">You're submitting a</span>
                  <span className="block font-medium">{formData.category.replace('-', ' ')}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                className="px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.message || isSubmitting}
                className="px-6 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSuccessMessage = () => {
    return (
      <div className="h-full flex flex-col justify-center items-center p-8">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xl font-bold">
            {mood !== null && moodEmojis[mood]}
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-2 text-center">Thank You, {formData.name}!</h2>
        <p className="text-center text-gray-600 mb-8 max-w-md">
          Your {formData.category.replace('-', ' ')} has been received. We'll get back to you at {formData.email} as soon as possible.
        </p>
        
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => {
              setFormData({ email: '', name: '', message: '', category: 'bug-report' });
              setMood(null);
              setCurrentSection(0);
              setIsSubmitted(false);
            }}
            className="px-8 py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-all transform hover:scale-105"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  };

  // Return loading state if not mounted yet
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-sm border border-gray-200 h-[600px] flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div 
        id="portal-container"
        className="w-full max-w-xl rounded-3xl overflow-hidden shadow-sm border border-gray-200 h-[700px] transition-all duration-300 dark:border-gray-700"
        style={{ 
          transform: currentSection === 0 ? `perspective(1000px) rotateY(${rotationDegree}deg)` : 'none'
        }}
      >
        {currentSection !== 0 && !isSubmitted && (
          <div className="h-2 bg-gray-100 dark:bg-gray-800">
            <div 
              className="h-full transition-all duration-500 bg-gray-400 dark:bg-gray-600"
              style={{ 
                width: `${progressPercentage}%`
              }}
            ></div>
          </div>
        )}
        
        {!isSubmitted ? renderSection() : renderSuccessMessage()}
      </div>
    </div>
  );
};

export default CustomerPortal;