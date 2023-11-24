import Field from "../../../Field/Field";
import { IModalProps } from "..//..//Modal/Modal";
import fields from "../../fields.module.css";
import Modal from "../../Modal/Modal";
import useFieldsState from "../../../../hooks/useFieldsState";

export interface IFields {
    name: string;
    category: string;
    description: string;
    setName: (value: string) => void;
    setCategory: (value: string) => void;
    setDescription: (value: string) => void;
}

const ModalCreateTask = ({ active, setActive }: IModalProps) => {
    const { name, category, description, setName, setCategory, setDescription } = useFieldsState();

    function createClick() {
        createTask(name, description, category);
        setActive(false);
    }
    return (
        <Modal title="Создание задачи"
            submitName="Создать"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={createClick}>
            <div className={fields.topLayer}>
                <Field className={fields.name}
                    title="Имя"
                    hint="Введите название задачи"
                    value={name}
                    setValue={setName}>
                    <div className="redStar">*</div>
                </Field>

                <Field className={fields.category}
                    title="Категория"
                    hint="Выберите категорию"
                    value={category}
                    setValue={setCategory} />
            </div>
            <Field className={fields.description}
                title="Описание"
                hint="Введите описание задачи"
                value={description}
                setValue={setDescription} />
        </Modal>
    );
}

function createTask(name: string, description: string, category: string) {
    fetch('http://localhost:8089/api/ToDoList/AddTask', {
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