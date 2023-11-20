import { useRef, useState } from "react";
import Field from "../../../Field/Field";
import Button from "../../../Button/Button";
import { Task } from "../../../TaskList/TaskList";

interface IModalEditProps {
    task: Task
    updatePage: (task: Task) => void
}

const ModalEditTask: React.FC<IModalEditProps> = ({ task, updatePage }) => {
    const [name, setName] = useState<string>(task.name);
    const [categoryId, setCategoryId] = useState<string>(task.categoryId + '');
    const [description, setDescription] = useState<string>(task.description);

    function updateClick() {
        updatePage({
            id: task.id,
            name: name,
            description: description,
            categoryId: Number(categoryId)
        });
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Редактирование задачи</div>

            <Field className="name"
                title="Имя"
                hint=""
                value={name}
                setValue={setName}>
                <div className="redStar">*</div>
            </Field>

            <Field className="category"
                title="Категория"
                hint=""
                value={categoryId}
                setValue={setCategoryId} />

            <Field className="description"
                title="Описание"
                hint=""
                value={description}
                setValue={setDescription} />

            <Button className="submit"
                text="Сохранить"
                onAction={updateClick} />

            <Button className="cancel"
                text="Закрыть"
                onAction={() => { }} />
            <img className="close" src="svg/close.svg" alt="" onClick={() => { }}></img>
        </div>
    );
}



export default ModalEditTask;