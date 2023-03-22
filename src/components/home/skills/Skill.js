import React from 'react'
import SkillBar from './SkillBar'

const Skill = ({skills}) => {
  return (
    <div className='skill'>
        {skills.map((skill) => {
            return <SkillBar title={skill.title} Logo={skill.logo}/>
        })}
    </div>
  )
}

export default Skill