import React from 'react'
import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'
import foto4 from '../../assets/foto4.jpg'
import foto5 from '../../assets/foto5.jpg'
import foto6 from '../../assets/foto6.jpg'
import './galeria.css'
import ImgComp from '../imgComp/ImgComp'
import ModalImg from '../modalImg/ModalImg'
import { ModalContext } from '../../contexts/ModalContext'

function Galeria() {

    const {
        openModal,
        setOpenModal,
        indexModal,
        setIndexModal
    } = React.useContext(ModalContext);

    const setOpenImg = (index) => {
        setIndexModal(index);
        setOpenModal(!openModal);
    }

    return (
        <>
            <div className='content-column'>
                <h3 className='title-church'>Galeria</h3>
                <div className='gallery'>
                    <div className="img1" onClick={() => setOpenImg(1)}>
                        <img src={foto1} alt="" loading="lazy" />
                    </div>
                    <div className="img2" onClick={() => setOpenImg(2)}>
                        <img src={foto2} alt="" loading="lazy" />
                    </div>
                    <div className="img3" onClick={() => setOpenImg(3)}>
                        <img src={foto3} alt="" loading="lazy" />
                    </div>
                    <div className="img4" onClick={() => setOpenImg(4)}>
                        <img src={foto4} alt="" loading="lazy" />
                    </div>
                    <div className="img5" onClick={() => setOpenImg(5)}>
                        <img src={foto5} alt="" loading="lazy" />
                    </div>
                    <div className="img6" onClick={() => setOpenImg(6)}>
                        <img src={foto6} alt="" loading="lazy" />
                    </div>
                </div>
                {openModal && <ModalImg><ImgComp /></ModalImg>
                }
            </div>
        </>
    )
}

export default Galeria