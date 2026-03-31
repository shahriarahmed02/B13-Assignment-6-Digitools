import React from 'react';
import bannerimg from '../../assets1/products/banner.png'

const Hero = () => {
  return (
    <section className="w-full bg-white p-10 md:p-20 overflow-hidden mx-auto">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Badge/Tagline */}
         <div className="inline-block px-4 py-2 bg-indigo-100 border border-indigo-100 rounded-full mb-6">
  <div className="flex items-center gap-3">
    {/* The Glowing Dot */}
    <div className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 shadow-[0_0_10px_#6366f1]"></span>
    </div>
    
    <span className="text-indigo-600 text-xs md:text-sm font-bold tracking-wide uppercase flex items-center gap-2">
      New: AI-Powered Tools Available
    </span>
  </div>
</div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-[1.1]">
           Supercharge Your <br />Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-200 cursor-pointer">
            Explore Products
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 cursor-pointer  transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 ">
       
          
          <div className="relative rounded-3xl overflow-hidden  ">
            
            <img 
              src={bannerimg} 
              alt="Digital Tools Dashboard" 
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;