import React from 'react'
import SkillBar from './SkillBar'

const Skill = ({skills, grid}) => {
  return (
    <div className={`skill ${grid ? "grid" : ""}`}>
        {skills.map((skill) => {
            return <SkillBar title={skill.title} Logo={skill.logo}/>
        })}
    </div>
  )
}

export default Skill