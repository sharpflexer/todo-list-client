import { useEffect, useRef, useState } from "react";
import Field from "../../../Field/Field";
import Modal, { IModalProps } from "../../Modal/Modal";
import { Category } from "../ModalDeleteCategory/ModalDeleteCategory";
import fields from "../../fields.module.css";

interface IEditCategory extends IModalProps {
    category: Category;
    editCategory: (id: number) => void
}

const ModalEdit = ({ active, setActive, category, editCategory }: IEditCategory) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        setName(category.name);
        setDescription(category.description);
    }, [category, setName, setDescription]);

    function updateClick() {
        updateTask(category.id, name, description)
        setActive(false);
    }

    return (
        <Modal title="Редактирование категории"
            submitName="Сохранить"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={updateClick}>
            <div className={fields.topLayer}>

                <Field className={fields.name}
                    title="Имя"
                    hint=""
                    value={name}
                    setValue={setName}>
                    <div className="redStar">*</div>
                </Field>
                
            </div>
            <Field className={fields.description}
                title="Описание"
                hint=""
                value={description}
                setValue={setDescription} />
        </Modal>
    );
}

function updateTask(id: number, name: string, description: string) {
    fetch('http://192.168.100.206:8089/api/ToDoList/UpdateCategory', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: { id },
            name: { name },
            description: { description },
        })
    });
}



export default ModalEdit;