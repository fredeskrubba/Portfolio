import {  Route } from 'wouter'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Projects } from './pages/Projects'
import './styles/style.css'
import Navbar from './components/navbar/Navbar'
import BurgerMenu from './components/navbar/BurgerMenu'
import Footer from './components/footer/Footer'

function App() {
  return (
        <div>
          <Navbar/>
          <BurgerMenu/>
          

          <Route path='/' component={Home}/>
          <Route path='/contact' element={Contact}/>
          <Route path='/about' element={About}/>
          <Route path='/projects' element={Projects}/>
          <Footer/>
        </div>
        
      
    
  );
}

export default App;
