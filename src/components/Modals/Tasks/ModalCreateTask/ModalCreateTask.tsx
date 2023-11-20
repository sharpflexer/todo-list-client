import { useRef, useState } from "react";
import Button from "../../../Button/Button";
import Field from "../../../Field/Field";

function ModalCreateTask() {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function createClick() {
        createTask(name, description, category)
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Создание задачи</div>

            <Field className="name"
                title="Имя"
                hint="Введите название задачи"
                value={name}
                setValue={setName}>
                <div className="redStar">*</div>
            </Field>

            <Field className="category"
                title="Категория"
                hint="Выберите категорию"
                value={category}
                setValue={setCategory} />

            <Field className="description"
                title="Описание"
                hint="Введите описание задачи"
                value={description}
                setValue={setDescription} />

            <Button className="submit"
                text="Создать"
                onAction={createClick} />

            <Button className="cancel"
                text="Закрыть"
                onAction={() => { }} />

            <img className="close" src="svg/close.svg" alt="" onClick={() => { }}></img>
        </div>
    );
}

function createTask(name: string, description: string, category: string) {
    fetch('http://192.168.120.246:8089/api/ToDoList/AddTask', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            description: description,
            categoryId: category
        })
    });
}



export default ModalCreateTask;