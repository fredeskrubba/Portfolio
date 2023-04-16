import React from 'react'
import Project from './Project'
import '../../../styles/homepage/projects-section.css'
import projects from '../../../assets/img/projects.jpg'
import cases from '../../../assets/img/cases.jpg'
import experience from '../../../assets/img/experience.jpg'
import { useState, useEffect } from 'react'


const ProjectsSection = () => {
  const [slideIn1, setSlideIn1] = useState("")
  const [slideIn2, setSlideIn2] = useState("")
  const [slideIn3, setSlideIn3] = useState("")

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(window.pageYOffset)
    if (position >= 1700){
      setSlideIn1("slide-in")
    }
    if (position >= 2500){
      setSlideIn2("slide-in")
    }
    if (position >= 3200){
      setSlideIn3("slide-in")
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll,);
  }, []);

  return (
    <section className='projects-section'>
        <Project
            animation={slideIn1}
            img={projects}
            alt='projects'
            buttonText='Se Projekter'
            url='/projects'
        />
        <Project
            animation={slideIn2}
            img={cases}
            alt='cases'
            buttonText='Mine Cases'
            url='/cases'
        />
        <Project
            animation={slideIn3}
            img={experience}
            alt='experience'
            buttonText='Min Erfaring'
            url='/experience'
        />
    </section>  
  )
}

export default ProjectsSection