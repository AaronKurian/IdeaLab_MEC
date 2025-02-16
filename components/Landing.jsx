'use client';
import { motion } from "framer-motion";
import Navbar from './Navbar';

export default function Landing() {
  return (
    <header className="relative w-full h-screen text-white overflow-hidden">
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
      <div className="relative z-10 container mx-auto pt-40 px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Innovate. Create. Transform.</h1>
        <p className="text-xl mb-16">The Innovation and Entrepreneurship Hub of Model Engineering College</p>
        
        {/* Animated double chevron */}
        <div className="animate-bounce mt-8 pt-16">
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
