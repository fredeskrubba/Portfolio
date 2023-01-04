import React from 'react'
import {ReactComponent as HomeIcon} from '../../assets/img/home-icon.svg'
import {ReactComponent as ContactIcon} from '../../assets/img/contact-icon.svg'
import {ReactComponent as BurgerIcon} from '../../assets/img/burger-icon.svg'
import '../../styles/navbar-mobile.css'
import { Link } from 'react-router-dom'


const Navbar = ({visible, setVisible, burgerClass, setBurgerClass}) => {
  
  return (
    <nav>
           <Link to='/' className='home-button nav-button'>
                <HomeIcon className='home-icon'/>
           </Link> 
           <div className='nav-divider'></div>
           <Link to='/Contact' className='contact-button nav-button'>
                <ContactIcon className='contact-icon'/>
           </Link>
           <div className='nav-divider '></div>           
          <BurgerIcon className='nav-button burger-button' onClick={
            
            ()=>{
              burgerClass === 'link-menu' ? setBurgerClass('link-menu-visible') : setBurgerClass('link-menu')
              visible === 'burger-menu' ? setVisible('burger-menu-visible') : setVisible('burger-menu')
            }
          }/>
    </nav>
  )
}

export default Navbar