import { useRef, useState } from "react";
import Button from "./Button/Button";
import { Close1Icon } from "./Close1Icon";
import { DropDownArrow1Icon } from "./DropDownArrow1Icon";
import Field from "./Field/Field";
import classes from './ModalCreate.module.css';

function ModalCreate() {
    const [name, setName] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [description, setDescription] = useState<string>();
    
    return (
        <>
            <div className={classes.modalCreate}></div>
            <div className={classes.title}>Создание задачи</div>
            <Field className={classes.name} title="Имя" hint="Введите название задачи" value={name}>
                <div className="redStar">*</div>
            </Field>
            <Field className={classes.category} title="Категория" hint="Выберите категорию" value={category}/>
            <Field className={classes.description} title="Описание" hint="Введите описание задачи" value={description}/>
            <Button className={classes.submit} text="Создать" action={() => { }} />
            <Button className={classes.cancel} text="Закрыть" action={() => { }} />
            <div className={classes.close}>
                <Close1Icon className={classes.icon} />
            </div>


        </>
    );
}

function createTask() {
    fetch('https://mywebsite.example/endpoint/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: {},
            description: 'yourOtherValue',
            categoryId: 2
        })
    });
}

export default ModalCreate;