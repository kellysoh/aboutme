// 참고: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a

import React from 'react'; 
import './Modal.css'; 

const Modal = ({ handleClose, show, children })  => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"; 

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close 
                </button>
            </section>
        </div>
    );
};

export {Modal}; 