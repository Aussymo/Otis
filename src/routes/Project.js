import React from "react"
import "../Styles/Hero.css"
import Kitchen2 from '../assets/kitchen2.jpg'
import Work from "../components/Work"

const Project = () => {
    return (
        <div>
            <div className="hero">
                <div className="mask">
                    <img className="intro-img" src={Kitchen2} alt="projects" />
                </div>
                <div className="content">
                    <h1>Our Projects.</h1>
                    <p>Making dreams a reality</p>
                </div>
            </div>
            <Work />
        </div>
    )
}

export default Project
