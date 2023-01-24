import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import About from '../components/About'
import profile from '../assets/img/portrait.jpg'
import ProjectsSection from '../components/projects/ProjectsSection'
import BurgerMenu from '../components/navbar/BurgerMenu'






const Home = () => {
  

  return (
    <>
      <Navbar />
      <Header/>
      <About img={profile}/>
      <ProjectsSection/>
      <BurgerMenu/>
    </>
  )
}

export default Home