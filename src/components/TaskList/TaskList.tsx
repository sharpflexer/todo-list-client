import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import classes from './TaskList.module.css';
import ModalEdit from '../Modals/Categories/ModalEditCategory/ModalEditCategory';
import ModalEditTask from '../Modals/Tasks/ModalEditTask/ModalEditTask';
import Modal from '../Modals/Modal/Modal';
import ModalDeleteTask from '../Modals/Tasks/ModalDeleteTask/ModalDeleteTask';

export type Task = {
    id: number;
    name: string;
    description: string;
    categoryId: number;
}

function TaskList() {
    const [data, setData] = useState<Task[]>([]);
    const [currentData, setCurrentData] = useState<Task>({ id: 0, name: "", description: "", categoryId: 0 });

    const [taskId, setTaskId] = useState<number>(0);

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

        updateTask(task).then(() => {
            const oldTasks = data.filter((d) => d.id !== task.id);
            setData([task, ...oldTasks])
        });
    }

    const onDeleteUpdate = (id: number) => {
        setDeleteModalActive(false);

        deleteTask(id).then(() => {
            const oldTasks = data.filter((d) => d.id !== id);
            setData(oldTasks)
        });
    }
    // fetch data
    const dataFetch = async () => {
        const data = await (
            await fetch(
                'http://192.168.100.229:8089/api/ToDoList/GetTasks',
            )
        ).json();

        setData(data);
    };

    useEffect(() => {
        dataFetch();
    }, []);

    const listItems = data.map(task => (
        <Row id={task.id}
            name={task.name}
            description={task.description}
            onClickEdit={onEdit}
            onClickDelete={onDelete} />
    ));
    return (
        <div className={classes.main}>
            <div className={classes.tasklist}>
                {listItems}
            </div>
            <ModalEditTask active={editModalActive} setActive={setEditModalActive} task={currentData} updatePage={onEditUpdate} />
            <ModalDeleteTask active={deleteModalActive} setActive={setDeleteModalActive} task={currentData} deletePage={onDeleteUpdate} />
        </div>
    );
}

async function updateTask(task: Task) {
    await fetch('http://192.168.100.229:8089/api/ToDoList/UpdateTask', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
    });
}

async function deleteTask(id: number) {
    await fetch('http://192.168.100.229:8089/api/ToDoList/RemoveTask/' + id, {
        method: 'GET'
    });
}

export default TaskList;