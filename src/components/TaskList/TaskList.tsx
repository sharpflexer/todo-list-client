import { useState, useEffect, useContext } from "react";
import IList from "../../interfaces/IList";
import { RequestService } from "../../services/RequestService";
import Task from "../../types/Task";
import ModalCreateTask from "../Modals/Tasks/ModalCreateTask/ModalCreateTask";
import ModalDeleteTask from "../Modals/Tasks/ModalDeleteTask/ModalDeleteTask";
import ModalEditTask from "../Modals/Tasks/ModalEditTask/ModalEditTask";
import Row from "../Row/Row";

import classes from "./TaskList.module.css";
import React from "react";

function TaskList({ createActive, setCreateActive }: IList) {
    const [data, setData] = useState<Task[]>([]);
    const [currentData, setCurrentData] = useState<Task>({ id: 0, name: "", description: "", categoryId: 0 });

    const [editActive, setEditActive] = useState<boolean>(false);
    const [deleteActive, setDeleteActive] = useState<boolean>(false);

    const TaskContext = React.createContext([]);
    const items = useContext(TaskContext);

    const onEdit = (id: number) => {
        const currentTask = data.filter((d) => d.id === id);
        setCurrentData(currentTask[0]);

        setEditActive(true);
    }

    const onDelete = (id: number) => {
        const currentTask = data.filter((d) => d.id === id);

        setCurrentData(currentTask[0]);

        setDeleteActive(true);
    }

    const onCreateUpdate = (task: Task) => {
        setCreateActive(false);

        RequestService.createTask(task).then((response) => {
            setData([response, ...data].reverse())
        });
    }

    const onEditUpdate = (task: Task) => {
        setEditActive(false);

        RequestService.updateTask(task).then(() => {
            const oldTasks = data.filter((d) => d.id !== task.id);
            setData([task, ...oldTasks])
        });
    }

    const onDeleteUpdate = (id: number) => {
        setDeleteActive(false);

        RequestService.deleteTask(id).then(() => {
            const oldTasks = data.filter((d) => d.id !== id);
            setData(oldTasks)
        });
    }

    // fetch data
    const dataFetch = async () => {
        const data = items.length !== 0 ? items: await RequestService.readTasks();
        <TaskContext.Provider value={data} />
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

    return (
        <div className={classes.main}>
            <div className={classes.tasklist}>
                {listItems}
            </div>
            <ModalCreateTask active={createActive} setActive={setCreateActive} loadItem={onCreateUpdate} />
            <ModalEditTask active={editActive} setActive={setEditActive} item={currentData} loadItem={onEditUpdate} />
            <ModalDeleteTask active={deleteActive} setActive={setDeleteActive} loadItem={onDeleteUpdate} item={currentData}/>
        </div>
    );
}

export default TaskList;