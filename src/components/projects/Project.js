import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({img, buttonText, alt, url}) => {
  return (
    <article className='project'>
        <img src={img} alt={alt} />
        <Link to={url} className='link-button'><button>{buttonText}</button></Link>
    </article>
  )
}

export default Project