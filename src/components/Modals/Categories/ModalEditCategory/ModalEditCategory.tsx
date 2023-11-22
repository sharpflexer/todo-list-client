import { useRef, useState } from "react";
import Field from "../../../Field/Field";

interface IModalEditProps {
    id: number;
}

const ModalEdit: React.FC<IModalEditProps> = ({ id }) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function updateClick() {
        updateTask(id, name, description)
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Редактирование категории</div>

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