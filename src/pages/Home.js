import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import About from '../components/About'
import profile from '../assets/img/profile.jpg'
import ProjectsSection from '../components/projects/ProjectsSection'
import BurgerMenu from '../components/navbar/BurgerMenu'
import { useState } from 'react'

const Home = () => {
  const [visible, setVisible] = useState('none')
  const [burgerClass, setBurgerClass] = useState('burger-button nav-button')

  return (
    <>
      <Navbar setVisible={setVisible} visible={visible} burgerClass={burgerClass} setBurgerClass={setBurgerClass}/>
      <Header/>
      <About img={profile}/>
      <ProjectsSection/>
      <BurgerMenu visible={visible} burgerClass={burgerClass}/>
    </>
  )
}

export default Home