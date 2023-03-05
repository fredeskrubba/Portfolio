import React, { useState } from 'react'
import '../../../styles/homepage/header.css'


const DropdownBubble = ({img, alt, popText, popTextClass}) => {

  const [visible, setVisible] = useState("hide")
  return (
    <div className='dropdown-bubble'>
        <img src={img} alt={alt} onMouseEnter={()=>{setVisible("show")}} onMouseLeave={()=>{setVisible("hide")}}/>
        <article className={`pop-text ${popTextClass} ${visible}`}>
          <p>
            {popText}
          </p>
        </article>
    </div>
  )
}

export default DropdownBubble