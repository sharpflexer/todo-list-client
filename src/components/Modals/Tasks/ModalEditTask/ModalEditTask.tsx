import { useEffect } from "react";
import useFieldsState from "../../../../hooks/useFieldsState";
import Field from "../../../Field/Field";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css";
import IModalContent from "../../../../interfaces/IModalContent";
import IHasItem from "../../../../interfaces/IHasItem";
import Task from "../../../../types/Task";

const ModalEditTask = ({ active, setActive, loadItem, item}: IModalContent<Task> & IHasItem<Task>) => {
    const { name, category, description, setName, setCategory, setDescription } = useFieldsState();

    useEffect(() => {
        setName(item.name);
        setCategory(item.categoryId + '');
        setDescription(item.description);
    }, [item, setName, setCategory, setDescription]);


    function updateClick() {
        loadItem({
            id: item.id,
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