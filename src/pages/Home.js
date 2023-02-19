import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/home/header/Header'
import About from '../components/home/About'
import profile from '../assets/img/portrait.jpg'
import ProjectsSection from '../components/home/projects/ProjectsSection'
import BurgerMenu from '../components/navbar/BurgerMenu'






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