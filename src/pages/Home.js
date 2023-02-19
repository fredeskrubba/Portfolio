import React from 'react'
import Header from '../components/home/header/Header'
import About from '../components/home/About'
import profile from '../assets/img/portrait.jpg'
import ProjectsSection from '../components/home/projects/ProjectsSection'







const Home = () => {
  

  return (
    <>
      
      <Header/>
      <About img={profile}/>
      <ProjectsSection/>
      
    </>
  )
}

export default Home