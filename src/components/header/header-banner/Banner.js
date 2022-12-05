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
      <div className='banner-wrapper'>
        <div className='banner-transition'>
          <div className='banner-grid'>
                {bubbles.map(bubble => {
                  return <BannerItem text={bubble} className="banner-item"/>
                })}
              </div>
          </div>
      </div>
    </div>
  )
}

export default Banner