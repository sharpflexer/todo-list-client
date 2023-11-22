import Field from "../../../Field/Field";
import { Task } from "../../../TaskList/TaskList";
import useFieldsState from "../../../../hooks/useFieldsState";
import Modal, { IModalProps } from "../../Modal/Modal";

interface IModalEditProps extends IModalProps{
    task: Task
    updatePage: (task: Task) => void
}

const ModalEditTask = ({ task, updatePage, active, setActive }: IModalEditProps) => {
    const {name, category, description ,setName, setCategory, setDescription} = useFieldsState();

    function updateClick() {
        updatePage({
            id: task.id,
            name: name,
            description: description,
            categoryId: Number(category)
        });
        setActive(false);
    }

    return (
        <Modal active={active} setActive={setActive} submitClick={updateClick}>
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
                value={category}
                setValue={setCategory} />

            <Field className="description"
                title="Описание"
                hint=""
                value={description}
                setValue={setDescription} />
        </Modal>
    );
}

export default ModalEditTask;