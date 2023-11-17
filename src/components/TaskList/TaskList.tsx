import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import './TaskList.css';
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
    const [currentData, setCurrendData] = useState<Task>();
    
    const [taskId, setTaskId] = useState<number>(0);

    const [editModalActive, setEditModalActive] = useState<boolean>(true);
    const [deleteModalActive, setDeleteModalActive] = useState<boolean>(true);
    
    const onEdit = (id:number) => {
        const currentTask = data.filter((d) => d.id === id);

        setCurrendData(currentTask[0]);

        setEditModalActive(true);
    }

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://192.168.100.206:8089/api/ToDoList/GetTasks',
                )
            ).json();

            setData(data);
        };

        dataFetch();
    }, []);

    const listItems = data.map(task => (
        <tr key={task.id}>
            <Row id={task.id} 
                 name={task.name} 
                 description={task.description} 
                 onClickEdit = {onEdit}  
                 onClickDelete = {}/>
        </tr>
    ));
    return (
        <div className='main'>
            <div className='background'></div>
            <table className='taskList'>
                <tbody>{listItems}</tbody>
            </table>
            <Modal active={editModalActive} setActive={setEditModalActive} >
                <ModalEditTask task={currentData}/>
            </Modal>
            <Modal active={deleteModalActive} setActive={setDeleteModalActive} >
                <ModalDeleteTask task={currentData}/>
            </Modal>
        </div>
    );
}

export default TaskList;