import React from 'react'
import '../../styles/homepage/skills.css'
import Skill from './skills/Skill'
import {ReactComponent as FigmaLogo} from "../../assets/icons/figma-logo.svg"
import {ReactComponent as PsLogo} from "../../assets/icons/ps-logo.svg"
import {ReactComponent as AiLogo} from "../../assets/icons/ai-logo.svg"
import {ReactComponent as HtmlLogo} from "../../assets/icons/html-icon.svg"
import {ReactComponent as CssLogo} from "../../assets/icons/css-icon.svg"
import {ReactComponent as JsLogo} from "../../assets/icons/js-icon.svg"
import {ReactComponent as ReactLogo} from "../../assets/icons/react-icon.svg"
import {ReactComponent as TailwindLogo} from "../../assets/icons/tailwind-icon.svg"
import {ReactComponent as NpmLogo} from "../../assets/icons/npm-icon.svg"
import {ReactComponent as NodeLogo} from "../../assets/icons/node-icon.svg"
import {ReactComponent as SqlLogo} from "../../assets/icons/sql-icon.svg"
import {ReactComponent as MongoLogo} from "../../assets/icons/mongo-icon.svg"
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Skillset = () => {

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
  const frontSkills = [
    {
      title: "HTML",
      logo: HtmlLogo
    },
    {
      title: "CSS/SCSS",
      logo: CssLogo
    },
    {
      title: "Javascript",
      logo: JsLogo
    },
    {
      title: "React",
      logo: ReactLogo
    },
    {
      title: "Tailwind.css",
      logo: TailwindLogo
    },
    {
      title: "NPM",
      logo: NpmLogo
    },
  ]
  const backSkills = [
    {
      title: "Node.js",
      logo: NodeLogo
    },
    {
      title: "MySql",
      logo: SqlLogo
    },
    {
      title: "MongoDB",
      logo: MongoLogo
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  
  
  const updateIndex = (newIndex) => {
    setActiveIndex(newIndex)
  }

  return (
    <section className='skillset-section-desktop'>
          <h2>Mit Skillset</h2>
          <p className='sub-text'>I et hav af programmeringsprog, design-programmer, og Javascript frameworks, har jeg tilegnet mig evner inden for en række teknologier som er populære, veldokumenterede og minimalistiske</p>
          <article className='carousel'>
            <section className='inner' style={{transform: `translateX(-${activeIndex * 100}%)`}}>
              <div className="flex skill-container">
                <h2>UI/UX</h2>
                <Skill skills={uiSkills}/>
              </div>
              <div className="flex skill-container">
                <h2>Frontend</h2>
                <Skill skills={frontSkills} grid={true}/>
              </div>
              <div className="flex skill-container">
                <h2>Backend</h2>
                <Skill skills={backSkills}/>
              </div>
            </section>
          </article>
          <article className="tabs">
            <div className={` tab ${activeIndex === 0 ? "activeTab" : ""}`} onClick={()=>{updateIndex(0)}}/>
            <div className={` tab ${activeIndex === 1 ? "activeTab" : ""}`} onClick={()=>{updateIndex(1)}}/>
            <div className={` tab ${activeIndex === 2 ? "activeTab" : ""}`} onClick={()=>{updateIndex(2)}}/>
          </article>
    </section>
  )
}

export default Skillset