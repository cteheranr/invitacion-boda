import React from 'react'
import foto1 from '../../assets/foto1.jpeg'
import foto2 from '../../assets/foto2.jpeg'
import foto3 from '../../assets/foto3.jpeg'
import foto4 from '../../assets/foto4.jpeg'
import foto5 from '../../assets/foto5.jpeg'
import './galeria.css'

function Galeria() {
    return (
        <>
            <div className='content-colum'>
            <h3 className='title-church'>Galeria</h3>
                <div className='galeria-colum'>
                    <img src={foto1} alt="" />
                    <img src={foto2} alt="" />
                    <img src={foto3} alt="" />
                </div>
                <div className='galeria-colum'>
                    <img src={foto4} alt="" />
                    <img src={foto5} alt="" />
                </div>
            </div>
        </>
    )
}

export default Galeria