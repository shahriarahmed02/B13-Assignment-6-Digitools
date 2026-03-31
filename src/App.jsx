import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Stats from './components/stats/Stats'
import New from './components/new/New'
// import Products from './components/Products'

// import Pricing from './components/Pricing'
// import Footer from './components/Footer'
import './App.css'
import './index.css' 


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
   
    <>
      
     
      
      
     
      
      <Navbar cartCount={cartCount} />
      <Hero />
      <Stats />
     
      <New setCartCount={setCartCount} />
 
   </>
      
     
  )
}

export default App;