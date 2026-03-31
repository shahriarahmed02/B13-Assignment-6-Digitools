import React, { useState } from 'react';

const Navbar = ({ cartCount }) => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 relative">
      <div className="max-w-[1280px] mx-auto flex flex-row items-center justify-between px-6">
        
        {/* 1. LOGO SECTION */}
        <div className="flex items-center gap-2">
           <span className="text-[#6366f1] text-xl font-bold tracking-tight">DigiTools</span>
        </div>

        {/* 2. LINKS SECTION: Desktop */}
        <div className="hidden md:flex flex-row items-center gap-8">
          <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 transition-colors">Products</a>
          <a href="#" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors">Features</a>
          <a href="#" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors">Testimonials</a>
          <a href="#" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors">FAQ</a>      
        </div>

        {/* 3. CART & ACTION SECTION */}
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {cartCount || 0}
            </span>
          </div>
          
          <div className="hidden sm:block">
            <a href="#" className="text-gray-600 font-medium hover:text-indigo-600 transition-colors mr-4">Login</a>
          </div>

          <button className="hidden sm:block bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-800 transition-all">
            Get Started
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50 py-4 px-6 flex flex-col gap-4">
          <a href="#" className="text-gray-900 font-medium py-2">Products</a>
          <a href="#" className="text-gray-600 font-medium py-2">Features</a>
          <a href="#" className="text-gray-600 font-medium py-2">Pricing</a>
          <a href="#" className="text-gray-600 font-medium py-2">Testimonials</a>
          <a href="#" className="text-gray-600 font-medium py-2">FAQ</a>
          <hr className="border-gray-100" />
          <a href="#" className="text-gray-600 font-medium py-2">Login</a>
          <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;