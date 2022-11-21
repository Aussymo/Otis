import React from "react"
import "../Styles/Hero.css"
import Bathroom3 from '../assets/bathroom3.jpg'
import AboutContent from "../components/AboutContent"

const About = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={Bathroom3} alt="fire" />
            </div>
            <div className="content">
                <h1>About Us.</h1>
                <p>We take pride in our work!</p>
            </div>
            <AboutContent />
        </div>
    )
}

export default About
