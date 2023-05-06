import Home from './components/Home'
import './styles/style.css'
import Navbar from './components/navbar/Navbar'
import BurgerMenu from './components/navbar/BurgerMenu'
import Footer from './components/footer/Footer'
import { useRef } from 'react'


function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  function scrollToContact() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToAbout() {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
        <div>
          <Navbar scrollToContact={scrollToContact} scrollToAbout={scrollToAbout}/>
          <Home/>
          <BurgerMenu/>
          <Footer id="contact" reference={contactRef}/>
        </div>
        
      
    
  );
}

export default App;
