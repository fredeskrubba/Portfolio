import React from 'react'
import "../../../styles/homepage/intro.css"

const Intro = ({img, text, headline}) => {
  return (
    <section className='intro'>
      <img src={img} alt="picture-of-me"/>
      <article>
        <h2>{headline}</h2>
        <p>{text}</p>
      </article>
    </section>
  )
}

export default Intro