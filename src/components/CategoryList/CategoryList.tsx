import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import classes from './CategoryList.module.css';
import ModalEditCategory from '../Modals/Categories/ModalEditCategory/ModalEditCategory';
import ModalDeleteCategory from '../Modals/Categories/ModalDeleteCategory/ModalDeleteCategory';
import CategoryRow from '../CategoryRow/CategoryRow';

export type Category = {
    id: number;
    name: string;
    description: string;
}

function CategoryList({active}:{active:boolean}) {
    const [data, setData] = useState<Category[]>([]);
    const [currentData, setCurrentData] = useState<Category>({ id: 0, name: "", description: ""});

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

    const onEditUpdate = (category: Category) => {
        setEditModalActive(false);

        updateCategory(category).then(() => {
            const oldCategories = data.filter((d) => d.id !== category.id);
            setData([category, ...oldCategories])
        });
    }

    const onDeleteUpdate = (id: number) => {
        setDeleteModalActive(false);

        deleteCategory(id).then(() => {
            const oldCategories = data.filter((d) => d.id !== id);
            setData(oldCategories)
        });
    }
    // fetch data
    const dataFetch = async () => {
        const data = await (
            await fetch(
                'http://localhost:8089/api/ToDoList/GetCategories',
            )
        ).json();

        setData(data);
    };

    useEffect(() => {
        dataFetch();
    }, []);

    const listItems = data.map(task => (
        <CategoryRow id={task.id}
            name={task.name}
            description={task.description}
            onClickEdit={onEdit}
            onClickDelete={onDelete} />
    ));
    return active ? (
        <div className={classes.main}>
            <div className={classes.tasklist}>
                {listItems}
            </div>
            <ModalEditCategory active={editModalActive} setActive={setEditModalActive} category={currentData} updatePage={onEditUpdate} />
            <ModalDeleteCategory active={deleteModalActive} setActive={setDeleteModalActive} category={currentData} deleteCategory={onDeleteUpdate} />
        </div>
    ): null;
}

async function updateCategory(category: Category) {
    await fetch('http://localhost:8089/api/ToDoList/UpdateCategory', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category)
    });
}

async function deleteCategory(id: number) {
    await fetch('http://localhost:8089/api/ToDoList/RemoveCategory/' + id, {
        method: 'GET'
    });
}

export default CategoryList;