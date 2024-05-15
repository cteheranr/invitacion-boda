import React from 'react'
import ReactDOM from "react-dom";
import './ModalImg.css'


function ModalImg({ children }) {
    return ReactDOM.createPortal(
        <div className="modal-view">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export default ModalImg