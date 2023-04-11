import React from 'react'
import Header from '../components/home/header/Header'
import Skillset from '../components/home/Skillset'
import ProjectsSection from '../components/home/projects/ProjectsSection'
import Intro from '../components/home/intro/Intro'
import selfie from "../assets/img/portrait.jpg"






const Home = () => {
  
  return (
    <>
      <Header />
      <Intro img={selfie} headline={"Hej, Jeg er Frederik!"} text={"Som passioneret Webudvikler, med flair for design har jeg ikke bare kendskab til diverse frontend-teknologier, men også gå-på-mod til at lære det der skulle mangle. Denne side er foreksempelt designet, kodet og opsat af mig selv. "}/>
      <Skillset/>
      <ProjectsSection/>
    </>
  )
}

export default Home