import { useState, useEffect } from "react";
import IList from "../../interfaces/IList";
import { RequestService } from "../../services/RequestService";
import Task from "../../types/Task";
import ModalCreateTask from "../Modals/Tasks/ModalCreateTask/ModalCreateTask";
import ModalDeleteTask from "../Modals/Tasks/ModalDeleteTask/ModalDeleteTask";
import ModalEditTask from "../Modals/Tasks/ModalEditTask/ModalEditTask";
import Row from "../Row/Row";

import classes from "./TaskList.module.css";

function TaskList({active, createActive, setCreateActive}: IList) {
    const [data, setData] = useState<Task[]>([]);
    const [currentData, setCurrentData] = useState<Task>({ id: 0, name: "", description: "", categoryId: 0 });

    const [editActive, setEditActive] = useState<boolean>(false);
    const [deleteActive, setDeleteActive] = useState<boolean>(false);

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

        RequestService.createTask(task).then(() => {
            setData([task, ...data].reverse())
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
            <ModalCreateTask active={createActive} setActive={setCreateActive} updatePage = {onCreateUpdate}/>
            <ModalEditTask active={editActive} setActive={setEditActive} task={currentData} updatePage={onEditUpdate} />
            <ModalDeleteTask active={deleteActive} setActive={setDeleteActive} task={currentData} deletePage={onDeleteUpdate} />
        </div>
    ): null;
}

export default TaskList;