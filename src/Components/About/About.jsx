import React from 'react'
import './About.css'

function About({setPlayState}) {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src="images/about.png" className='about-img' />
            <img src="images/play-icon.png" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nobis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quod, delectus eveniet provident quisquam neque autem nemo debitis quas vero?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe nisi possimus odit aspernatur reiciendis eum unde cum consectetur ea?</p>
        </div>
    </div>
  )
}

export default About