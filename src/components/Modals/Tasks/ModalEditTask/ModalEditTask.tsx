import Field from "../../../Field/Field";
import fields from "../../fields.module.css";
import { Task } from "../../../TaskList/TaskList";
import useFieldsState from "../../../../hooks/useFieldsState";
import Modal, { IModalProps } from "../../Modal/Modal";
import { useEffect } from "react";

interface IModalEditProps extends IModalProps {
    task: Task
    updatePage: (task: Task) => void
}

const ModalEditTask = ({ task, updatePage, active, setActive }: IModalEditProps) => {
    const { name, category, description, setName, setCategory, setDescription } = useFieldsState();

    useEffect(() => {
        setName(task.name);
        setCategory(task.categoryId + '');
        setDescription(task.description);
    }, [task, setName, setCategory, setDescription]);


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
        <Modal title="Редактирование задачи"
            submitName="Сохранить"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={updateClick}>
            <div className={fields.topLayer}>

                <Field className={fields.name}
                    title="Имя"
                    hint=""
                    value={name}
                    setValue={setName}>
                    <div className="redStar">*</div>
                </Field>

                <Field className={fields.category}
                    title="Категория"
                    hint=""
                    value={category}
                    setValue={setCategory} />
            </div>
            <Field className={fields.description}
                title="Описание"
                hint=""
                value={description}
                setValue={setDescription} />
        </Modal>
    );
}

export default ModalEditTask;