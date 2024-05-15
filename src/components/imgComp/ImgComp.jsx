import React from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import './ImgComp.css'
import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'
import foto4 from '../../assets/foto4.jpg'
import foto5 from '../../assets/foto5.jpg'
import foto6 from '../../assets/foto6.jpg'

function ImgComp() {
    const {
        setOpenModal,
        indexModal,
        setIndexModal,
    } = React.useContext(ModalContext);

    const onNext = () => {
        if (indexModal !== 6) {
            setIndexModal(indexModal + 1)
        }
    }

    const onPreview = () => {
        if (indexModal !== 1) {
            setIndexModal(indexModal - 1)
        }
    }

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowRight':
                onNext();
                break;
            case 'ArrowLeft':
                onPreview();
                break;
            default:
                break;
        }
    };

    const closeModal = () => {
        setOpenModal(false);
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className='container-img'>
            <div className='btn-content' onClick={onPreview}>
                <span className={indexModal !== 1 ? 'btn' : 'btn disable'}><p>{'<'}</p></span>
            </div>
            <div className='content-img'>
                <div className='button-close' onClick={closeModal}>Cerrar</div>
                <div className='imgs'>
                    {indexModal === 1 && <img src={foto1} alt="foto1" />}
                    {indexModal === 2 && <img src={foto2} alt="foto2" />}
                    {indexModal === 3 && <img src={foto3} alt="foto3" />}
                    {indexModal === 4 && <img src={foto4} alt="foto4" />}
                    {indexModal === 5 && <img src={foto5} alt="foto5" />}
                    {indexModal === 6 && <img src={foto6} alt="foto6" />}
                </div>
            </div>
            <div className='btn-content' onClick={onNext}>
                <span className={indexModal !== 6 ? 'btn' : 'btn disable'}><p>{'>'}</p></span>
            </div>
        </div>
    )
}

export default ImgComp