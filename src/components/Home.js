import React from 'react'
import Header from './home/header/Header'
import Skillset from './home/Skillset'
import Intro from './home/intro/Intro'
import selfie from "../assets/img/portrait.jpg"

const Home = ({reference}) => {
  
  return (
    <>
      <Header/>
      <Intro reference={reference} img={selfie} headline={"Hej, Jeg er Frederik!"} text={"Som passioneret Webudvikler, med flair for design har jeg ikke bare kendskab til diverse frontend-teknologier, men også gå-på-mod til at lære det der skulle mangle. Denne side er foreksempelt designet, kodet og opsat af mig selv. "}/>
      <Skillset/>
    </>
  )
}

export default Home