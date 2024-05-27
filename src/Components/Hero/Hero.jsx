import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero container' id='hero'>
    <div className="hero-text">
      <h1>We Ensure better educetion for abetter world</h1>
      <p>Our cutting-edge curriculum is designed to emower students with the Knowelge, skills, and experiences needed to excel in the dynamic filed of eductions</p>
      <button className='btn'> Explore More <img src="/images/dark-arrow.png" alt="" /></button>
    </div>
    </div>
  )
}

export default Hero