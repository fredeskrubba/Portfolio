import React from 'react'
import {ReactComponent as ArrowDown} from '../../../assets/img/arrow-down.svg'
import '../../../styles/homepage/header.css'
import { useDesktopStore } from '../../stores/homeStore'

const DropdownBubble = ({img, alt, dropDownText}) => {
  const visible = useDesktopStore((state) => state.dropdownTextVisible)
  const setVisible = useDesktopStore((state) => state.setDropdownTextVisible)

  return (
    <div className='dropdown-bubble'>
        <img src={img} alt={alt} />
        <div className='dropdown' onClick={()=>{visible === "hide" ? setVisible("show") : setVisible("hide")}} >
            <ArrowDown />
        </div>
        <article className={`dropdown-text ${visible}`}>
          <p>{dropDownText}</p>
        </article>
    </div>
  )
}

export default DropdownBubble