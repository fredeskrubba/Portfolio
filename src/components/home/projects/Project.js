import React from 'react'
import { Link } from 'wouter'

const Project = ({img, buttonText, alt, url, animation}) => {
  return (
    <article className={`project ${animation}`}>
        <img src={img} alt={alt} />
        <Link href={url}><button className='link-button'>{buttonText}</button></Link>
    </article>
  )
}

export default Project