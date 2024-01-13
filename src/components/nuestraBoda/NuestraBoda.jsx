import React from 'react'
import wave from '../../assets/wave.svg'
import sobre from '../../assets/sobre.png'
import dessCode from '../../assets/dress-code.png'
import './NuestraBoda.css'


function NuestraBoda() {
    return (
        <div className='nuestraBoda'>
            <img className="div-wave" src={wave} alt="" />
            <div className="div-frase">
                <p className='versiculo txt'>
                    "y dijo: Por esto el hombre dejará padre y madre, y se
                    unirá a su mujer, y los dos serán una sola carne?;
                    Así que no son ya más dos, sino una sola carne; por tanto,
                    lo que Dios juntó, no lo separe el hombre." <span>- Mateo 19:8-9</span>
                </p>
                <p className='frase txt'>
                    Con el amor que Dios ha unido, los corazones de Camilo Teherán
                    y Andrea Meza se fundirán en un solo camino. Los invitamos a
                    celebrar este sagrado lazo que, como nos recuerda Mateo,
                    no será separado por la mano del hombre.
                </p>
            </div>
            {/* <img className="div-wave2" src={wave2} alt="" /> */}
            <div className='cards-content'>
                <div className="card">
                    <h1 className='title-card'>Dress Code</h1>
                    <img src={dessCode} alt="" />
                    <div className='info-dress'>
                        <div>
                            <h3>Mujeres</h3>
                            <p>Vestido largo</p>
                        </div>
                        <div>
                            <h3>Hombres</h3>
                            <p>Formal</p>
                        </div>
                    </div>
                    <h3>Colores Reservados</h3>
                    <p>Blanco, Verde</p>
                </div>
                <div className="card">
                <h1 className='title-card'>Regalos</h1>
                    <img className='sobre' src={sobre} alt="" />
                    <div className='info-dress'>
                        <p>Quiero que sepas que nuestro <br/>principal regalo es tu presencia <br/>en este día tan especial.</p>
                    </div>
                    <h2>Lluvia de sobres</h2>
                </div>
            </div>
        </div>
    )
}

export default NuestraBoda