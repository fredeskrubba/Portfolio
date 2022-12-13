import React from 'react'
import '../../styles/homepage/header.css'
import headerImage from '../../assets/img/header-image.jpg'

const Header = () => {
  return (
    <header className='header'>
      <section className='upper-header'>
        <h1 className=''>Frederik Skrubbeltrang</h1>
        <div className='seperator-1'></div>
      </section>
      <section className='lower-header'>
        <img src={headerImage} alt="header-image" />
        <div className='seperator-2'></div>
        <div></div>
      </section>
    </header>
    
  )
}

export default Header