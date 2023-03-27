import React from 'react'
import '../../styles/homepage/about.css'
import Skill from './skills/Skill'
import {ReactComponent as FigmaLogo} from "../../assets/icons/figma-logo.svg"
import {ReactComponent as PsLogo} from "../../assets/icons/ps-logo.svg"
import {ReactComponent as AiLogo} from "../../assets/icons/ai-logo.svg"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = ({img, alt}) => {

  const uiSkills = [
    {
      title: "Figma",
      logo: FigmaLogo
    },
    {
      title: "Photoshop",
      logo: PsLogo
    },
    {
      title: "Illustrator",
      logo: AiLogo
    },
  ]
  return (
    <section className='about-section-desktop'>
          <h2>Mit Skillset</h2>
          <p className='sub-text'>I et hav af programmeringsprog, design-programmer, og Javascript frameworks, har jeg tilegnet mig evner inden for en række teknologier som er populære, veldokumenterede og minimalistiske</p>
          <Carousel infiniteLoop={true}>
            <div className="ui skill-container">
              <h2>UI/UX</h2>
              <Skill skills={uiSkills}/>
            </div>
            <div className="ui skill-container">
              <h2>Frontend</h2>
              <Skill skills={uiSkills}/>
            </div>
            <div className="ui skill-container">
              <h2>Backend</h2>
              <Skill skills={uiSkills}/>
            </div>
          </Carousel>
    </section>
  )
}

export default About