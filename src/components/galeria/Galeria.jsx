import React from 'react'
import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'
import foto4 from '../../assets/foto4.jpg'
import foto5 from '../../assets/foto5.jpg'
import foto6 from '../../assets/foto6.jpg'
import './galeria.css'

function Galeria() {
    return (
        <>
            <div className='content-column'>
                <h3 className='title-church'>Galeria</h3>
                <div className='gallery'>
                    <div className="img1">
                        <img src={foto1} alt="" loading="lazy" />
                    </div>
                    <div className="img2">
                        <img src={foto2} alt="" loading="lazy" />
                    </div>
                    <div className="img3">
                        <img src={foto3} alt="" loading="lazy" />
                    </div>
                    <div className="img4">
                        <img src={foto4} alt="" loading="lazy" />
                    </div>
                    <div className="img5">
                        <img src={foto5} alt="" loading="lazy" />
                    </div>
                    <div className="img6">
                        <img src={foto6} alt="" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galeria