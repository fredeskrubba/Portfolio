import React from 'react'
import '../../styles/homepage/about.css'
import {ReactComponent as ArrowIcon} from '../../assets/img/arrow.svg'

const About = ({img, alt}) => {
  return (
    <section className='about-section'>
        <article className='quote-section'>
            <h2>“Lorem ipsum dolor sit amet consectetur. Adipiscing dictumst praesent sit fermentum ultrices. Arcu aenean.” </h2>
        </article>
        <div className='about-img-container'>
            <img src={img} alt={alt} />
            <div>
                <p>Læs mere</p>
                <ArrowIcon/>  
            </div>
        </div>
    </section>
  )
}

export default About