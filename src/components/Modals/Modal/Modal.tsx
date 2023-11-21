import React, { useState } from 'react';

import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';
import Button from '../../Button/Button';

export interface IModalProps {
    active: boolean;
    setActive: (value: boolean) => void;
    submitClick?: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ active, setActive, submitClick}) => {
    function closeModal(){
        setActive(false);
    }

    const modalContainer = document.getElementById("root");

    const modalContent = active ? (
        <div className={classes.modal} onClick={() => setActive?.(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>

                <Button className="submit"
                    text="Создать"
                    onAction={submitClick ? submitClick : () => {}} />

                <Button className="cancel"
                    text="Закрыть"
                    onAction={closeModal} />

                <img className="close" src="svg/close.svg" alt="" onClick={() => { }}></img>
            </div>
        </div>
    ) : null;

    return modalContainer ? ReactDOM.createPortal(modalContent, modalContainer) : null;
};

export default Modal;
