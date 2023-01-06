import React from 'react'
import {ReactComponent as HomeIcon} from '../../assets/img/home-icon.svg'
import {ReactComponent as ContactIcon} from '../../assets/img/contact-icon.svg'
import {ReactComponent as BurgerIcon} from '../../assets/img/burger-icon.svg'
import '../../styles/navbar-mobile.css'
import '../../styles/navbar-desktop.css'
import { Link } from 'react-router-dom'
import { useBurgerStore } from './burgerStore/useBurgerStore'

const Navbar = () => {
  const {visible, setVisible, burgerClass, setBurgerClass} = useBurgerStore()
  return (
    <nav>
      <section className='navbar-mobile'>
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
      </section>
      <section className='navbar-desktop'>
            <Link to='/'>Hjem</Link>
            <article>
              <Link to='/About'>Om</Link>
              <Link to='/Projects'>Projekter</Link>
              <Link to='/Contact'>Kontakt</Link>
            </article>
      </section>
    </nav>
  )
}

export default Navbar