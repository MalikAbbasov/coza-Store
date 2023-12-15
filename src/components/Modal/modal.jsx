import React from 'react';
import './modal.scss'

function Modal({ product, closeModal }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src={product.thumbnail} alt="" />
                <h5>About: {product.description.text}</h5>
                <p>Price: ${product.price}</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal;