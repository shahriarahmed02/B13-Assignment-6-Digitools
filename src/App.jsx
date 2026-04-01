import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Stats from './components/stats/Stats'
import New from './components/new/New'
// import Footer from './components/Footer'
import './App.css'
import './index.css' 
import Feature from './components/feature/Feature'
import Pricing from './components/pricing/Priceing'
import Challenge from './components/challenge/Challenge'
import Footer from './components/footer/Footer'


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
   
    <>
      
     
      
      
     
      
      <Navbar cartCount={cartCount} />
      <Hero />
      <Stats />
     
      <New setCartCount={setCartCount} />
      <Feature />
      <Pricing />
      <Challenge />
      <Footer />
   </>
      
     
  )
}

export default App;