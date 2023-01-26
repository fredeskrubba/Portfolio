import React from 'react'
import {ReactComponent as ArrowDown} from '../../../assets/img/arrow-down.svg'
import '../../../styles/homepage/header.css'

const DropdownBubble = ({img, alt}) => {
  return (
    <div className='dropdown-bubble'>
        <img src={img} alt={alt} />
        <article className='dropdown'>
            <ArrowDown/>
        </article>
    </div>
  )
}

export default DropdownBubble