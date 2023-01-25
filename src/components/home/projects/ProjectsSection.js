import React from 'react'
import Project from './Project'
import '../../../styles/homepage/projects-section.css'
import projects from '../../../assets/img/projects.jpg'
import cases from '../../../assets/img/cases.jpg'
import experience from '../../../assets/img/experience.jpg'


const ProjectsSection = () => {
  return (
    <section className='projects-section'>
        <Project
            img={projects}
            alt='projects'
            buttonText='Se Projekter'
            url='/projects'
        />
        <Project
            img={cases}
            alt='cases'
            buttonText='Mine Cases'
            url='/cases'
        />
        <Project
            img={experience}
            alt='experience'
            buttonText='Min Erfaring'
            url='/experience'
        />
    </section>  
  )
}

export default ProjectsSection