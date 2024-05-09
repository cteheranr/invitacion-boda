import React from 'react'
import './comparte.css'
import instagram from '../../assets/instagram.png'

function Comparte() {
  return (
    <div className='compartenos'>
      <h1>Comparte las fotos de la boda</h1>
      <img src={instagram} alt="" />
      <h1 className='normal'>#BodaA&C</h1>
    </div>
  )
}

export default Comparte