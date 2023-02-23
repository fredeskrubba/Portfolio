import React from 'react'
import '../../../styles/homepage/header.css'
import { useState } from 'react'

const DropdownBubble = ({img, alt, popText, popTextClass, setPopTextClass}) => {

  return (
    <div className='dropdown-bubble'>
        <img src={img} alt={alt}/>
        <article className={`pop-text ${popTextClass}`}>
          <p>
            {popText}
          </p>
        </article>
    </div>
  )
}

export default DropdownBubble