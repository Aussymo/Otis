import '../Styles/About.css'
import React from 'react'

import Living from '../assets/living.jpg'
import Kitchen from '../assets/kitchen1.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who We Are.</h1>
            <p>Otis Construction specializes in full home renovations. We take pride in our work and making our customers dreams become a reality!</p>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack bottom'>
                    <img src={Living} alt='React Icon' className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent