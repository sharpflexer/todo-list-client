import React, { useState } from "react";
import './Header.css';
import Modal from "../Modal/Modal";
import ModalCreate from "../ModalCreate/ModalCreate";


function Header() {
    const [modalActive, setModalActive] = useState<boolean>(true);

    return (
        <table className="layout">
            <tbody>
                <tr>
                    <td><h1>ToDo List</h1></td>
                    <td><h4 className="tasks">Задачи</h4></td>
                    <td><h4 className="vbar">|</h4></td>
                    <td><h4 className="categories">Категории</h4></td>
                    <td><h5 onClick={() => setModalActive(true)}>Добавить задачу</h5></td>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <ModalCreate />
                    </Modal>
                </tr>
            </tbody>
        </table>
    );
}

export default Header;