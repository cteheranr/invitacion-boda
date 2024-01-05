import React from 'react'
import "./video.css"
import arregloFloral2 from '../../assets/arregloFloral2.png'

function Video() {
  return (
    <div className='zona-video'>
      <p>Aqui va el video</p>
      <div className='img'>
        <img src={arregloFloral2} alt="" />
      </div>
    </div>

  )
}

export default Video