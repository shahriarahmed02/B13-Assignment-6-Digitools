import React from 'react';

const Challenge = () => {
  return (
    <section className="max-w-100% bg-indigo-600">
      <div className="relative overflow-hidden sm:mx-2 p-3 md: bg-indigo-600 rounded-xl px-8 py-12 mt-7 text-center shadow-2xl">
        
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Ready To Transform Your Workflow?
          </h2>

          {/* Subtext */}
          <p className="text-purple-100 text-lg font-medium opacity-90">
            Join thousands of professionals who are already using Digitools to work smarter. 
           <br /> Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-indigo-600 font-black rounded-4xl shadow-lg hover:bg-amber-200 transition-all active:scale-95">
              Explore Products
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white font-black rounded-4xl hover:bg-indigo-700 transition-all active:scale-95">
              View Pricing
            </button>
          </div>

          {/* Trust Badges/Footer Text */}
          <p className="text-purple-200/70 text-xs font-bold uppercase tracking-widest ">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenge;