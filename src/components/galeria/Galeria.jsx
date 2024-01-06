import React from 'react'
import recurso2 from '../../assets/Recurso1.png'
import './galeria.css'

function Galeria() {
    return (
        <div className='content-galeria'>
            <div className='galeria'>
                <img src={recurso2} alt="" />
                <img src={recurso2} alt="" />
                <img src={recurso2} alt="" />
                <img src={recurso2} alt="" />
                <img src={recurso2} alt="" />
                <img src={recurso2} alt="" />
            </div>
        </div>
    )
}

export default Galeria