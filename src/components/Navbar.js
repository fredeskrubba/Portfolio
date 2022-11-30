import React from 'react'
import {ReactComponent as HomeIcon} from '../assets/img/home-icon.svg'
import {ReactComponent as ContactIcon} from '../assets/img/contact-icon.svg'
import {ReactComponent as BurgerIcon} from '../assets/img/burger-icon.svg'
import '../styles/navbar-mobile.css'

const Navbar = () => {
  return (
    <nav className=''>
           <a href="#" className=''>
                <HomeIcon className=''/>
           </a> 
           <div className=''></div>
           <a href="#" className=''>
                <ContactIcon className=''/>
           </a>
           <div className=''></div> 
           <a href="#" className=''>
                <BurgerIcon className=''/>
           </a> 
    </nav>
  )
}

export default Navbar