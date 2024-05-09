import React from 'react'
import "./conteo.css"
import circuloFlorez from '../../assets/Recurso1.png'
import Countdown from './countdown/Countdown';

function Conteo() {
    const targetDate = '2024-10-19 16:59:59';
    return (
        <>
            <div className='mens-cont'>
                <span>Después de  8 años de noviazgo, hemos decidido por amor y buscando la gracia de Dios, unir nuestras vidas en el sacramento del matrimonio. Por lo que nos complace que sean partícipes de esta unión.</span>
                <div className='conteo'>
                    <div className="fondo"><img src={circuloFlorez} alt="" loading="lazy" /></div>
                    <div className='text-conteo'>
                        <p className='title-conteo'>Faltan</p>
                        <Countdown targetDate={targetDate} />
                        <div className='label-text'>
                            <p>D</p>
                            <p>H</p>
                            <p>M</p>
                            <p>S</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conteo