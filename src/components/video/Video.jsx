import React from 'react'
import "./video.css"
import arregloFloral2 from '../../assets/arregloFloral2.png'
import video from '../../assets/0508.mp4'

function Video() {
  return (
    <div className='zona-video'>
      <video controls>
        <source src={video} type="video/mp4" />
      </video>
      <div className='img'>
        <img src={arregloFloral2} alt="" />
      </div>
    </div>

  )
}

export default Video