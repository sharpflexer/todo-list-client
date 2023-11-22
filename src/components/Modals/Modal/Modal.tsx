import React, { useState } from 'react';

import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

export interface IModalProps {
    active: boolean;
    setActive: (value: boolean) => void;
    submitClick?: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ active, setActive, submitClick, children }) => {
    function closeModal() {
        setActive(false);
    }

    const modalContainer = document.getElementById("root");

    const modalContent = active ? (
        <div className={classes.modal} onClick={() => setActive?.(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.header}>
                    <div className={classes.title}>Создание задачи</div>
                    <img className={classes.close} src="svg/close.svg" alt="" onClick={closeModal}></img>
                </div>
                <div className={classes.children}>
                    {children}
                </div>
                <div className={classes.buttonPanel}>
                    <button className={classes.submit}
                        onClick={submitClick ? submitClick : () => { }}>Создать</button>
                    <button className={classes.cancel}
                        onClick={closeModal} >Закрыть</button>
                </div>
            </div>
        </div >
    ) : null;

    return modalContainer ? ReactDOM.createPortal(modalContent, modalContainer) : null;
};

export default Modal;
