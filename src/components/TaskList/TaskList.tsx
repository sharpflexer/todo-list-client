import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import './TaskList.css';

type Task = {
    id: number; 
    name: string; 
    description: string; 
    categoryId: number;
}[]

function TaskList() {
    const [data, setData] = useState<Task>([]);

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
            <Row name={task.name} description={task.description} />
        </tr>
    ));
    return (
        <div className='main'>
            <table className='taskList'>
                <tbody>{listItems}</tbody>
            </table>
        </div>
    );
}

export default TaskList;