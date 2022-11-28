import React from 'react'
import {ReactComponent as HomeIcon} from '../assets/img/home-icon.svg'
import {ReactComponent as ContactIcon} from '../assets/img/contact-icon.svg'
import {ReactComponent as BurgerIcon} from '../assets/img/burger-icon.svg'


const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-main-teal to-secondary-teal grid grid-cols-3 rounded-full p-5 inset-x-0 mx-auto fixed bottom-28 w-5/6 place-items-center'>
           <a href="#" className='bg-main-dark flex justify-center items-center rounded-full w-20 h-20'>
                <HomeIcon className=' w-24 h-24 p-2'/>
           </a> 
           <a href="#" className='bg-main-dark flex justify-center items-center rounded-full w-20 h-20'>
                <ContactIcon className=' w-24 h-24 p-2'/>
           </a> 
           <a href="#" className='bg-main-dark flex justify-center items-center rounded-full w-20 h-20'>
                <BurgerIcon className=' w-24 h-24 p-2'/>
           </a> 
    </nav>
  )
}

export default Navbar