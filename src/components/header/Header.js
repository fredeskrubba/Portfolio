import React from 'react'
import '../../styles/homepage/header.css'


const Header = () => {
  return (
    <header className='header'>
      <section className='upper-header'>
        <h1 className=''>Frederik Skrubbeltrang</h1>
        <div className='seperator-1'></div>
      </section>
      <section className='lower-header'>
        <article className='headings'>
          <h2>UI/UX</h2>
          <h2>Frontend</h2>
          <h2>Backend</h2>
        </article>
        <figure>
          <div className='bubble-cont-1'>
            <div className='circle circle-med'></div>
            <div className='circle circle-small'></div>
          </div>
          <div className='bubble-cont-2'>
            <div className='circle circle-small'></div>
            <div className='circle circle-big'></div>
          </div>
        </figure>
      </section>
    </header>
    
  )
}

export default Header