import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-white  p-10 gap-6 ">
      <div className="max-w-[100%] mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">DigiTools</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Column */}
          <div className=" space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200">
              Social Links
            </h4>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <img 
                    src={`https://img.icons8.com/ios-filled/24/0F172A/${social}.png`} 
                    alt={social} 
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} Digitools. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-white text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;