'use client';
import { motion } from "framer-motion";
import Navbar from './Navbar';

export default function Landing() {
  return (
    <header className="relative w-full h-screen text-white overflow-hidden font-satoshi">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/server.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-black opacity-90 -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto pt-64 sm:pt-60 px-1 sm:px-6 py-20 text-center">
        <div className="relative">
          <h1 className="text-2xl sm:text-7xl font-bold mb-1">Innovate. Create. Transform.</h1>
          <h1 className="text-2xl sm:text-7xl font-bold opacity-[0.15] blur-[1.4px] scale-y-[-1] transform-gpu -mt-2 mb-8">
            Innovate. Create. Transform.
          </h1>
        </div>
        
        <div className="relative">
          <p className="text-xl mb-2 px-2 mt-20 sm:mt-2">The Innovation and Entrepreneurship Hub of Model Engineering College</p>
          
        </div>
        
        {/* Animated double chevron */}
        <div className="animate-bounce mt-8 pt-28 sm:pt-16">
          <svg 
            className="w-8 h-8 mx-auto"
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              stroke="url(#blue-gradient)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="blue-gradient" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
}
