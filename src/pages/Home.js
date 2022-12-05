import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/header/Header'
import About from '../components/About'
import profile from '../assets/img/profile.jpg'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About img={profile}/>
    </>
  )
}

export default Home