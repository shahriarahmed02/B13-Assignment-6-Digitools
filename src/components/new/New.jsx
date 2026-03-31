import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

const New = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('product');
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('digi-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('digi-cart', JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  const handleAddToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      return toast.warn("Item already in cart!");
    }
    setCart([...cart, product]);
    toast.success("Added to Cart successfully!");
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 font-sans">
      
      {/* Header & Toggle */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900">Premium Digital Tools</h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm">
          Choose from our curated collection of premium digital products designed to boost your productivity.
        </p>
        
        <div className="inline-flex items-center p-1 bg-slate-50 border border-slate-200 rounded-full mt-6">
          <button 
            onClick={() => setActiveTab('product')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'product' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'cart' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'product' ? (
          <motion.div 
            key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map(product => (
              <div key={product.id} className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col">
                {/* Badge from your design */}
                {product.tag && (
                  <span className="absolute top-6 right-6 px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-lg border border-amber-100">
                    {product.tag}
                  </span>
                )}

                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  <img src={product.icon} alt="" className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-slate-900">${product.price}</span>
                  <span className="text-slate-400 text-sm">/{product.period === 'monthly' ? 'Mo' : 'One-Time'}</span>
                </div>

                {/* Features with checkmarks from image_3f14bf.png */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98]"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-8">Your Cart</h3>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <img src={item.icon} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-slate-500 text-sm">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-rose-500 font-bold text-sm hover:underline">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-slate-500 font-medium">Total:</span>
                  <span className="text-3xl font-black text-slate-900">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full py-5 bg-indigo-600  hover:bg-indigo-800 text-white font-black rounded-2xl text-lg shadow-lg shadow-purple-100 transition-all shadow-md active:scale-[0.98]">
                  Proceed To Checkout
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