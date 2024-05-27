import React from 'react'
import './Campus.css'

function Campus() {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src="/images/gallery-1.png" alt="" />
            <img src="/images/gallery-2.png" alt="" />
            <img src="/images/gallery-3.png" alt="" />
            <img src="/images/gallery-4.png" alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src="/images/white-arrow.png"  /></button>
    </div>
  )
}

export default Campus