import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import classes from './TaskList.module.css';
import ModalEdit from '../Modals/Categories/ModalEditCategory/ModalEditCategory';
import ModalEditTask from '../Modals/Tasks/ModalEditTask/ModalEditTask';
import Modal from '../Modals/Modal/Modal';
import ModalDeleteTask from '../Modals/Tasks/ModalDeleteTask/ModalDeleteTask';
import {RequestService} from "../../services/RequestService";

export type Task = {
    id: number;
    name: string;
    description: string;
    categoryId: number;
}

function TaskList({active}:{active:boolean}) {
    const [data, setData] = useState<Task[]>([]);
    const [currentData, setCurrentData] = useState<Task>({ id: 0, name: "", description: "", categoryId: 0 });

    const [editModalActive, setEditModalActive] = useState<boolean>(false);
    const [deleteModalActive, setDeleteModalActive] = useState<boolean>(false);

    const onEdit = (id: number) => {
        const currentTask = data.filter((d) => d.id === id);
        setCurrentData(currentTask[0]);

        setEditModalActive(true);
    }

    const onDelete = (id: number) => {
        const currentTask = data.filter((d) => d.id === id);

        setCurrentData(currentTask[0]);

        setDeleteModalActive(true);
    }

    const onEditUpdate = (task: Task) => {
        setEditModalActive(false);

        RequestService.updateTask(task).then(() => {
            const oldTasks = data.filter((d) => d.id !== task.id);
            setData([task, ...oldTasks])
        });
    }

    const onDeleteUpdate = (id: number) => {
        setDeleteModalActive(false);

        RequestService.deleteTask(id).then(() => {
            const oldTasks = data.filter((d) => d.id !== id);
            setData(oldTasks)
        });
    }
    // fetch data
    const dataFetch = async () => {
        const data = await RequestService.readTasks();
        setData(data);
    };

    useEffect(() => {
        dataFetch();
    }, []);

    const listItems = data.map(task => (
        <Row id={task.id!}
            name={task.name}
            description={task.description}
            categoryId={task.categoryId}
            onClickEdit={onEdit}
            onClickDelete={onDelete} />
    ));
    return active ? (
        <div className={classes.main}>
            <div className={classes.tasklist}>
                {listItems}
            </div>
            <ModalEditTask active={editModalActive} setActive={setEditModalActive} task={currentData} updatePage={onEditUpdate} />
            <ModalDeleteTask active={deleteModalActive} setActive={setDeleteModalActive} task={currentData} deletePage={onDeleteUpdate} />
        </div>
    ): null;
}

export default TaskList;