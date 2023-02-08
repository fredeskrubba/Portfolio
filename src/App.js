import {  Route } from 'wouter'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Projects } from './pages/Projects'
import './styles/style.css'


function App() {
  return (
        <div>
          <Route path='/' component={Home}/>
          <Route path='/contact' element={Contact}/>
          <Route path='/about' element={About}/>
          <Route path='/projects' element={Projects}/>
        </div>
        
      
    
  );
}

export default App;
