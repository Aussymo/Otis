import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Hero.css'
import Logo from '../assets/logo.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={Logo} alt='Kitchen' />
        </div>
        <div className='content'>
            <p>We are Otis Construction</p>
            <h1>We specialize in full home remodels. No job is too small.</h1>
            <div>
                <Link to='/Project' className='btn'>Projects</Link>
                <Link to='/Contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero