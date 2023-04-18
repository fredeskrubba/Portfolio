import {  Route } from 'wouter'
import Home from './pages/Home'
import About from './pages/About'
import { Projects } from './pages/Projects'
import './styles/style.css'
import Navbar from './components/navbar/Navbar'
import BurgerMenu from './components/navbar/BurgerMenu'
import Footer from './components/footer/Footer'
import { useRef } from 'react'

function App() {
  const contactRef = useRef(null);

  function scrollToSection() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
        <div>
          <Navbar scrollToContact={scrollToSection}/>
          <BurgerMenu/>

          <Route path='/' component={Home}/>
          <Route path='/about' element={About}/>
          <Route path='/projects' element={Projects}/>
          <Footer id="contact" reference={contactRef}/>
        </div>
        
      
    
  );
}

export default App;
