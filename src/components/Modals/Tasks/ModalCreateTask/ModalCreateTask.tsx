import Field from "../../../Field/Field";
import { IModalProps } from "..//..//Modal/Modal";
import fields from "../../fields.module.css";
import Modal from "../../Modal/Modal";
import useFieldsState from "../../../../hooks/useFieldsState";
import { RequestService } from "../../../../services/RequestService";
import { Task } from "../../../TaskList/TaskList";

export interface IFields {
    name: string;
    category: string;
    description: string;
    setName: (value: string) => void;
    setCategory: (value: string) => void;
    setDescription: (value: string) => void;
}

 interface IModalCreateProps extends IModalProps {
    updatePage: (task: Task) => void;
}

const ModalCreateTask = ({ active, setActive, updatePage }: IModalCreateProps) => {
    const { name, category, description, setName, setCategory, setDescription } = useFieldsState();

    function createClick() {
        const task: Task = {
            id: 0,
            name,
            description,
            categoryId: Number(category)
        }
        updatePage(task);
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

export default ModalCreateTask;