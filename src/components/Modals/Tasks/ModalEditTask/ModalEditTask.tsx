import { useEffect } from "react";
import useFieldsState from "../../../../hooks/useFieldsState";
import IModalEditProps from "../../../../interfaces/IModalEditProps";
import Field from "../../../Field/Field";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css";

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