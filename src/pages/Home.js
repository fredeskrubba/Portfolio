import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/header/Header'
import About from '../components/About'
import profile from '../assets/img/profile.jpg'
import ProjectsSection from '../components/projects/ProjectsSection'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About img={profile}/>
      <ProjectsSection/>
    </>
  )
}

export default Home