import React from 'react'
import './inform.css'
import inglesia from '../../assets/iglesia.webp'
import copas from '../../assets/copas.png'

function Inform() {
  return (
    <div className='information'>
        <div className='fila'>
            <h3 className='title-church'>Ceremonia</h3>
            <div>
                <img src={inglesia} alt="" />
            </div>
            <div className='info-p'>
                <p>Parroquia Nuestra Señora de la Consolata</p>
                <p>Blas de Lezo Mz 25 Lt 22 Etapa 4</p>
                <p>Cartagena - Colombia</p>
            </div>
            <h4>5:00 PM</h4>
            <a href="https://maps.app.goo.gl/q9Fy3fuyTopkibBt6" target='_blank'>
            <button>CÓMO LLEGAR</button>
            </a>
        </div>
        <div className='fila'>
            <h3 className='title-church'>Recepción</h3>
            <div>
                <img src={copas} alt="" />
            </div>
            <div className='info-p'>
                <p>Salon Veleros Eventos</p>
                <p>Cartagena - Colombia</p>
            </div>
            <h4>7:00 PM</h4>
            <a href="https://maps.app.goo.gl/aNT5RoYSFCVRXzME9" target="_blank">
                <button>CÓMO LLEGAR</button>
            </a>
        </div>
    </div>
  )
}

export default Inform