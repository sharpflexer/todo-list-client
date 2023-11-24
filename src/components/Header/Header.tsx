import React, { useState } from "react";
import Modal from "../Modals/Modal/Modal";
import ModalDeleteTask from "../Modals/Tasks/ModalDeleteTask/ModalDeleteTask";
import ModalDeleteCategory from "../Modals/Categories/ModalDeleteCategory/ModalDeleteCategory";
import ModalCreateTask from "../Modals/Tasks/ModalCreateTask/ModalCreateTask";
import classes from "./Header.module.css";

//Работает
interface IActive {
    setModalActive: (value: boolean) => void;
    setTasksActive: (value: boolean) => void;
    setCategoriesActive: (value: boolean) => void;
}

function Header({ setModalActive, setTasksActive, setCategoriesActive }: IActive) {
    function enableTasks(){
        setCategoriesActive(false);
        setTasksActive(true);
    }
    
    function enableCategories(){
        setTasksActive(false);
        setCategoriesActive(true);
    }

    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    //TODO: Обернуть tasklist в context
    return (
        <div className={classes.layout}>
            <label className={classes.todo}>ToDo List</label>
            <div className={classes.element + " " + classes.tasks} onClick={enableTasks}>Задачи</div>
            <div className={classes.vbar}>|</div>
            <div className={classes.element + " " + classes.categories} onClick={enableCategories}>Категории</div>
            <div className={classes.element + " " + classes.createLink} onClick={() => setModalActive(true)}>Добавить задачу</div>
        </div>
    );
}

export default Header;