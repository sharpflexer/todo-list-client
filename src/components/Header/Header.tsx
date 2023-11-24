import React, { useState } from "react";
import Modal from "../Modals/Modal/Modal";
import ModalDeleteTask from "../Modals/Tasks/ModalDeleteTask/ModalDeleteTask";
import ModalDeleteCategory from "../Modals/Categories/ModalDeleteCategory/ModalDeleteCategory";
import ModalCreateTask from "../Modals/Tasks/ModalCreateTask/ModalCreateTask";
import classes from "./Header.module.css";

//Работает
interface IActive {
    createLinkText: string;
    setModalActive: (value: boolean) => void;
    setTasksActive: (value: boolean) => void;
    setCategoriesActive: (value: boolean) => void;
}

function Header({createLinkText, setModalActive, setTasksActive, setCategoriesActive }: IActive) {
    const [taskCreateActive, setTaskCreateActive] = useState<boolean>(true);
    const [categoryCreateActive, setCategoryCreateActive] = useState<boolean>(false);

    function enableTasks(){
        setCategoriesActive(false);
        setTasksActive(true);
    }
    
    function enableCategories(){
        setTasksActive(false);
        setCategoriesActive(true);
    }
    
    //TODO: Обернуть tasklist в context
    return (
        <div className={classes.layout}>
            <label className={classes.todo}>ToDo List</label>
            <div className={classes.element + " " + classes.tasks} onClick={enableTasks}>Задачи</div>
            <div className={classes.vbar}>|</div>
            <div className={classes.element + " " + classes.categories} onClick={enableCategories}>Категории</div>
            <div className={classes.element + " " + classes.createLink} onClick={() => setModalActive(true)}>{createLinkText}</div>
        </div>
    );
}

export default Header;