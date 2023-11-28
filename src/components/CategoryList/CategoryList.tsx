import { useState, useEffect, useContext } from 'react';
import IList from '../../interfaces/IList';
import { RequestService } from '../../services/RequestService';
import Category from '../../types/Category';
import CategoryRow from '../CategoryRow/CategoryRow';
import ModalCreateCategory from '../Modals/Categories/ModalCreateCategory/ModalCreateCategory';
import ModalDeleteCategory from '../Modals/Categories/ModalDeleteCategory/ModalDeleteCategory';
import ModalEditCategory from '../Modals/Categories/ModalEditCategory/ModalEditCategory';
import classes from './CategoryList.module.css';
import React from 'react';

function CategoryList({createActive, setCreateActive}:IList) {
    const [data, setData] = useState<Category[]>([]);
    const [currentData, setCurrentData] = useState<Category>({ id: 0, name: "", description: ""});

    const [editModalActive, setEditActive] = useState<boolean>(false);
    const [deleteModalActive, setDeleteModalActive] = useState<boolean>(false);

    const CategoryContext = React.createContext([]);
    const items = useContext(CategoryContext);


    const onEdit = (id: number) => {
        const currentTask = data.filter((d) => d.id === id);
        setCurrentData(currentTask[0]);

        setEditActive(true);
    }


    const onDelete = (id: number) => {
        const currentTask = data.filter((d) => d.id === id);

        setCurrentData(currentTask[0]);

        setDeleteModalActive(true);
    }
    const onCreateUpdate = (category: Category) => {
        setCreateActive(false);

        RequestService.createCategory(category).then((response) => {
            setData([response, ...data].reverse());
        });
    }

    const onEditUpdate = (category: Category) => {
        setEditActive(false);

        RequestService.updateCategory(category).then(() => {
            const oldCategories = data.filter((d) => d.id !== category.id);
            setData([category, ...oldCategories])
        });
    }

    const onDeleteUpdate = (id: number) => {
        setDeleteModalActive(false);

        RequestService.deleteCategory(id).then(() => {
            const oldCategories = data.filter((d) => d.id !== id);
            setData(oldCategories)
        });
    }
    // fetch data
    const dataFetch = async () => {
        const data = items.length !== 0 ? items : await RequestService.readCategories();
        <CategoryContext.Provider value={data}/>
        setData(data);
    };

    useEffect(() => {
        dataFetch();
    }, []);

    const listItems = data.map(task => (
        <CategoryRow id={task.id!}
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
            <ModalCreateCategory active={createActive} setActive={setCreateActive} loadItem={onCreateUpdate}/>
            <ModalEditCategory active={editModalActive} setActive={setEditActive} item={currentData} loadItem={onEditUpdate} />
            <ModalDeleteCategory active={deleteModalActive} setActive={setDeleteModalActive} item={currentData} loadItem={onDeleteUpdate} />
        </div>
    );
}

export default CategoryList;