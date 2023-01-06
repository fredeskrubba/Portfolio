import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import About from '../components/About'
import profile from '../assets/img/profile.jpg'
import ProjectsSection from '../components/projects/ProjectsSection'
import BurgerMenu from '../components/navbar/BurgerMenu'
import { useState } from 'react'
import create from 'zustand'


const useToggleBurger = create((set) => ({
  burgerClass: 'burger-menu',

}))


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