import { useRef, useState } from "react";
import Field from "../../../Field/Field";
import Modal, { IModalProps } from "../../Modal/Modal";
import fields from "../../fields.module.css";

export interface ICategoryFields {
    name: string;
    description: string;
    setName: (value: string) => void;
    setDescription: (value: string) => void;
}

function ModalCreateCategory({active, setActive} : IModalProps) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function createClick() {
        createCategory(name, description)
        setActive(false);
    }

    return (
        <Modal title="Создание категории"
            submitName="Создать"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={createClick}>

            <div className={fields.topLayer}>
                <Field className={fields.name}
                    title="Имя"
                    hint="Введите название категории"
                    value={name}
                    setValue={setName}>
                    <div className="redStar">*</div>
                </Field>
            </div>
            <Field className={fields.description}
                title="Описание"
                hint="Введите описание категории"
                value={description}
                setValue={setDescription} />

        </Modal>
    );
}

function createCategory(name: string, description: string) {
    fetch('http://192.168.100.229:8089/api/ToDoList/AddCategory', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: { name },
            description: { description },
        })
    });
}



export default ModalCreateCategory;