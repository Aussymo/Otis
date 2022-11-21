import React from 'react'
import Form from '../components/Form'

import Living2 from '../assets/living2.jpg'

const Contact = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="intro-img" src={Living2} alt="img" />
    </div>
    <div className="content">
        <h1>Contact us.</h1>
        <p>For quotes and estimates fill out the form below</p>
    </div>
      <Form />
    </div>
  )
}

export default Contact