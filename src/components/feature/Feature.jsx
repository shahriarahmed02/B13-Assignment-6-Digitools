// src/components/Feature.jsx
import React from 'react';
// Import icons from the src assets folder
import userIcon from '../../assets1/products/user.png';
import packageIcon from '../../assets1/products/package.png';
import rocketIcon from '../../assets1/products/rocket.png';

const Feature = () => {
  // Step-by-step data (matches the design)
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon, 
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-24 bg-white font-sans">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Get Started In 3 Steps
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm font-medium">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* --- 3-STEP GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          // CARD
          <div 
            key={step.id} 
            className="relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center"
          >
            {/* 🔴 PURPLE NUMBERED BADGE (Top Right) */}
            <span className="absolute top-6 right-6 w-7 h-7 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
              {step.id}
            </span>

            {/* LARGE ICON CONTAINER (Rounded & Faded Background) */}
            <div className="w-24 h-24 bg-purple-50 rounded-[2rem] flex items-center justify-center mb-10 transition-colors group-hover:bg-[#E9D5FF]/30">
              <img 
                src={step.icon} 
                alt="" 
                className="w-12 h-12" // Icon size matching design
              />
            </div>

            {/* TEXT CONTENT */}
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              {step.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;