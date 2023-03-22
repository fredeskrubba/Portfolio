import React from 'react'

const SkillBar = ({Logo, title}) => {
  return (
    <div className='skill-bar'>
        <Logo/>
        <p className='title'>{title}</p>
    </div>
  )
}

export default SkillBar