import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Stats from './components/stats/Stats'
import New from './components/new/New'

import './App.css'
import './index.css' 
import Feature from './components/feature/Feature'
import Pricing from './components/pricing/Priceing'
import Challenge from './components/challenge/Challenge'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  
 
  const [activeTab, setActiveTab] = useState('product');

  return (
    <>
      {/* Navbar always stays visible */}
      <Navbar cartCount={cartCount} setActiveTab={setActiveTab} />

     
      {activeTab === 'product' && (
        <>
          <Hero />
          <Stats />
        </>
      )}
      
     
      <New 
        setCartCount={setCartCount} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

   
      {activeTab === 'product' && (
        <>
          <Feature />
          <Pricing />
          <Challenge />
          <Footer />
        </>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App;