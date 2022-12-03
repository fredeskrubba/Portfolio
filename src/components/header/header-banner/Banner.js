import React from 'react'
import BannerItem from './BannerItem'

const Banner = () => {
    const bubbles = [
        'Design',
        'UI',
        'UX',
        'Frontend',
        'Backend',
        'Kode',
        'Tech'
    ]
  return (
    <div className='banner'>
        {bubbles.map(bubble =>{
            return <BannerItem text={bubble}/>
        })}
    </div>
  )
}

export default Banner