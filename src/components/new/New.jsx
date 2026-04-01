import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

const New = ({ setCartCount, activeTab, setActiveTab }) => {
  const [products, setProducts] = useState([]);
  
  // Cart state initialized from LocalStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('digi-cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Fetch products from public/products.json
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Sync cart with LocalStorage and update Navbar count
  useEffect(() => {
    localStorage.setItem('digi-cart', JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  // Handle adding items to cart (with Toastify warning for duplicates)
  const handleAddToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      return toast.warn(`"${product.name}" is already in your cart!`);
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  // Handle removing items (with Toastify error/info)
  const handleRemove = (id, name) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error(`${name} removed from cart`);
  };

  // Handle Checkout (Clear cart and notify)
  const handleCheckout = () => {
    setCart([]);
    setCartCount(0);
    localStorage.removeItem('digi-cart');
    toast.info("Checkout successful! Your cart is now empty.", {
      theme: "colored"
    });
    
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 font-sans">
      
      {/* --- HEADER & TOGGLE --- */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Premium Digital Tools
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm font-medium">
          Choose from our curated collection of premium digital products designed to boost your productivity.
        </p>
        
        {/* Toggle Switch */}
        <div className="inline-flex items-center p-1 bg-slate-50 border border-slate-200 rounded-full mt-6">
          <button 
            onClick={() => setActiveTab('product')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === 'product' 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === 'cart' 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'product' ? (
          /* --- PRODUCT GRID VIEW --- */
          <motion.div 
            key="grid" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map(product => (
              <div key={product.id} className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                
                {/* Product Tag (New/Best Seller) */}
                {product.tag && (
                  <span className="absolute top-6 right-6 px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-lg border border-amber-100">
                    {product.tag}
                  </span>
                )}

                {/* Icon Container */}
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
                  <img src={product.icon} alt={product.name} className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                
                {/* Pricing */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-slate-900">${product.price}</span>
                  <span className="text-slate-400 text-sm font-medium">
                    /{product.period === 'monthly' ? 'Mo' : 'One-Time'}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Buy Button */}
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98]"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </motion.div>
        ) : (
          /* --- CART VIEW --- */
          <motion.div 
            key="cart" 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-3xl font-black text-slate-900 mb-10 text-center md:text-left">
              Your Selection
            </h3>
            
            {cart.length > 0 ? (
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-100 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <img src={item.icon} alt="" className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                        <p className="text-slate-500 font-bold text-sm">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemove(item.id, item.name)} 
                      className="px-4 py-2 text-rose-500 font-bold text-xs hover:bg-rose-50 rounded-xl transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Summary & Checkout */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-slate-400 font-bold text-lg uppercase tracking-wider">Total</span>
                    <span className="text-4xl font-black text-slate-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl text-lg shadow-xl shadow-indigo-100 transition-all active:scale-[0.98]"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center space-y-4">
                <p className="text-slate-400 font-medium text-lg">Your cart feels a bit lonely...</p>
                <button 
                  onClick={() => setActiveTab('product')}
                  className="bg-indigo-600 text-white rounded-4xl font-bold p-3 cursor-pointer"
                >
                  Go explore some tools
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default New;