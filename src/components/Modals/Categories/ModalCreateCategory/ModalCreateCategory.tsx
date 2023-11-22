import { useRef, useState } from "react";
import Field from "../../../Field/Field";

function ModalCreateCategory() {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function createClick() {
        createCategory(name, description)
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Создание категории</div>

            <Field className="name"
                title="Имя"
                hint="Введите название категории"
                value={name}
                setValue={setName}>
                <div className="redStar">*</div>
            </Field>

            <Field className="description"
                title="Описание"
                hint="Введите описание категории"
                value={description}
                setValue={setDescription} />
        </div>
    );
}

function createCategory(name: string, description: string) {
    fetch('http://192.168.100.206:8089/api/ToDoList/AddCategory', {
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