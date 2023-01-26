import React from 'react'
import '../../../styles/homepage/header.css'
import DropdownBubble from './DropdownBubble'
import uiImg from "../../../assets/img/pc_3.jpg"
import frontendImg from "../../../assets/img/pc_1.jpg"
import backendImg from "../../../assets/img/pc_2.jpg"

const Header = () => {
  return (
    <header className='header'>
      <section className='upper-header'>
        <h1 className=''>Frederik Skrubbeltrang</h1>
        <div className='seperator-1'></div>
      </section>
      <section className='lower-header'>
        <article className='headings-desktop'>
          <div className='heading-div'>
            <h2>UI/UX</h2>
            <DropdownBubble img={uiImg} alt="ui img"/>
          </div>
          <div className='heading-div'>
            <h2>Frontend</h2>
            <DropdownBubble img={frontendImg} alt="frontend img"/>
          </div>
          <div className='heading-div'>
            <h2>Backend</h2>
            <DropdownBubble img={backendImg} alt={backendImg}/>
          </div>
        </article>
        <article className='headings-mobile'>
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