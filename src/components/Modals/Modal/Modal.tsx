import IModalProps from "../../../interfaces/IModalProps";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Modal = ({ title, submitName, cancelName, active, setActive, submitClick, children }: IModalProps) => {
    function closeModal() {
        setActive(false);
    }

    const modalContainer = document.getElementById("root");

    const modalContent = active ? (
        <div className={classes.modal} onClick={() => setActive?.(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.header}>
                    <div className={classes.title}>{title ? title : ""}</div>
                    <img className={classes.close} src="svg/close.svg" alt="" onClick={closeModal}></img>
                </div>
                <div className={classes.children}>
                    {children}
                </div>
                <div className={classes.buttonPanel}>
                    <button className={classes.submit}
                        onClick={submitClick ? submitClick : () => { }}>{submitName}</button>
                    <button className={classes.cancel}
                        onClick={closeModal} >{cancelName}</button>
                </div>
            </div>
        </div >
    ) : null;

    return modalContainer ? ReactDOM.createPortal(modalContent, modalContainer) : null;
};

export default Modal;
