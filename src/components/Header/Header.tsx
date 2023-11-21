import React, { useState } from "react";
import './Header.css';
import Modal from "../Modals/Modal/Modal";
import ModalDeleteTask from "../Modals/Tasks/ModalDeleteTask/ModalDeleteTask";
import ModalDeleteCategory from "../Modals/Categories/ModalDeleteCategory/ModalDeleteCategory";
import ModalCreateTask from "../Modals/Tasks/ModalCreateTask/ModalCreateTask";

//Работает
interface IActive{
    setModalActive: (value: boolean) => void
}

function Header({setModalActive} : IActive ) {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    //TODO: Обернуть tasklist в context
    return (
        <table className="layout">
            <tbody>
                <tr>
                    <td><h1>ToDo List</h1></td>
                    <td><h4 className="tasks">Задачи</h4></td>
                    <td><h4 className="vbar">|</h4></td>
                    <td><h4 className="categories">Категории</h4></td>
                    <td><h5 onClick={() => setModalActive(true)}>Добавить задачу</h5></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Header;