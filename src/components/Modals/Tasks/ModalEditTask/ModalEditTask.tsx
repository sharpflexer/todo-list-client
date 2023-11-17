import { useRef, useState } from "react";
import { Close1Icon } from "../../Close1Icon";
import { DropDownArrow1Icon } from "../../DropDownArrow1Icon";
import Field from "../../../Field/Field";
import Button from "../../../Button/Button";
import { Task } from "../../../TaskList/TaskList";

interface IModalEditProps{
    task:Task
}

const ModalEditTask: React.FC<IModalEditProps> = ({ task}) => {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    function updateClick() {
        //updateTask(id, name, description, category)
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Редактирование задачи</div>

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
                   setValue={setCategory}/>

            <Field className="description"
                   title="Описание" 
                   hint="Введите описание задачи" 
                   value={description} 
                   setValue={setDescription}/>
                   
            <Button className="submit"
                    text="Сохранить" 
                    onAction={updateClick} />

            <Button className="cancel"
                    text="Закрыть" 
                    onAction={() => { }} />

            <div className="close">
                <Close1Icon className="icon" />
            </div>
        </div>
    );
}

function updateTask(id: number, name:string, description:string, category:string) {
    fetch('http://192.168.100.206:8089/api/ToDoList/UpdateTask', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: {id},
            name: {name},
            description: {description},
            categoryId: {category}
        })
    });
}



export default ModalEditTask;