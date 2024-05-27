import React from 'react'
import { useRef } from 'react'
import './Testimonials.css'

function Testimonials() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    
       const slideBackward = () => {
            if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }
    
    
  return (
    <div className='testimonials' id='testimonials'>
        <img src="/images/next-icon.png" className='next-btn' onClick={slideForward}/>
        <img src="/images/back-icon.png" className='back-btn' onClick={slideBackward} />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                    <div className="user-info">
                    <img src="/images/user-1.png"/>
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                   </div>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis praesentium accusantium quasi labore deserunt numquam ipsum eligendi qui reiciendis quam?</p>
                 </div>   
                    </li>

                     <li>
                    <div className='slide'>
                    <div className="user-info">
                    <img src="/images/user-2.png" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                   </div>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis praesentium accusantium quasi labore deserunt numquam ipsum eligendi qui reiciendis quam?</p>
                 </div>   
                    </li>

                     <li>
                    <div className='slide'>
                    <div className="user-info">
                    <img src="/images/user-3.png"/>
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                   </div>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis praesentium accusantium quasi labore deserunt numquam ipsum eligendi qui reiciendis quam?</p>
                 </div>   
                    </li>

                     <li>
                    <div className='slide'>
                    <div className="user-info">
                    <img src="/images/user-4.png"/>
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                   </div>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis praesentium accusantium quasi labore deserunt numquam ipsum eligendi qui reiciendis quam?</p>
                 </div>   
                    </li>

            </ul>
        </div>
                    

       
    </div>
  )
}

export default Testimonials


 {/* 
        <img src="/images/user-2.png" className='back-btn' />
        <img src="/images/user-3.png" className='back-btn' />
        <img src="/images/user-4.png" className='back-btn' /> */}