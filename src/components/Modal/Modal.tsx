import React, { Dispatch, SetStateAction } from 'react';

import "./Modal.css";
import ReactDOM from 'react-dom';

interface IModalProps {
    active: boolean;
    setActive?: (value: boolean) => void;
    children?: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ active, setActive, children}) => {
    const modalContainer = document.getElementById("root");

    const modalContent = active ? (
        <div className='modal' onClick={() => setActive?.(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    ) : null;

    return modalContainer ? ReactDOM.createPortal(modalContent, modalContainer) : null;
};

export default Modal;
