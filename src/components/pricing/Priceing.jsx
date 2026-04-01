import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative pl-12 pr-12 pt-6 pb-5 rounded-[2.5rem] border transition-all duration-300 ${
              plan.isPopular
                ? "bg-indigo-600 text-white border-gray-300 shadow-2xl scale-105 z-10"
                : "bg-white text-slate-900 border-gray-300 shadow-sm hover:shadow-lg"
            }`}
          >
            {/* Most Popular Badge */}
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-full border border-amber-200 shadow-sm whitespace-nowrap">
                 Most Popular
              </span>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm ${plan.isPopular ? "text-purple-100" : "text-slate-500"}`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-black">${plan.price}</span>
              <span className={`text-sm font-medium ${plan.isPopular ? "text-purple-200" : "text-slate-400"}`}>
                /Month
              </span>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <svg
                    className={`w-5 h-5 ${plan.isPopular ? "text-purple-200" : "text-green-500"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              className={`w-full py-4 rounded-2xl font-black transition-all active:scale-[0.98] ${
                plan.isPopular
                  ? "bg-white text-indigo-600 hover:bg-amber-200 shadow-xl"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;