import React from 'react'
import {ReactComponent as HomeIcon} from '../assets/img/home-icon.svg'
import {ReactComponent as ContactIcon} from '../assets/img/contact-icon.svg'
import {ReactComponent as BurgerIcon} from '../assets/img/burger-icon.svg'


const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-main-teal to-secondary-teal grid grid-cols-5 rounded-full inset-x-0 mx-auto fixed bottom-20 w-5/6 place-items-center px-5'>
           <a href="#" className='bg-main-dark flex justify-center items-center rounded-full w-20 h-20 justify-self-end fill-main-teal hover:bg-secondary-teal hover:fill-main-dark '>
                <HomeIcon className=' w-24 h-24 p-2'/>
           </a> 
           <div className=' p-2 h-24 bg-main-dark skew-x-12'></div>
           <a href="#" className='bg-main-dark flex justify-center items-center rounded-full w-20 h-20 fill-main-teal hover:bg-secondary-teal hover:fill-main-dark'>
                <ContactIcon className=' w-24 h-24 p-2'/>
           </a>
           <div className=' p-2 bg-main-dark h-24 skew-x-12'></div> 
           <a href="#" className='bg-main-dark flex justify-center items-center rounded-full w-20 h-20 justify-self-start stroke-secondary-teal hover:bg-secondary-teal hover:stroke-main-dark'>
                <BurgerIcon className=' w-24 h-24 p-2'/>
           </a> 
    </nav>
  )
}

export default Navbar