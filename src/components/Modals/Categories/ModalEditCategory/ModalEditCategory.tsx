import { useEffect, useRef, useState } from "react";
import Field from "../../../Field/Field";
import Modal, { IModalProps } from "../../Modal/Modal";
import fields from "../../fields.module.css";
import { Category } from "../../../CategoryList/CategoryList";

interface IEditCategory extends IModalProps {
    category: Category;
    updatePage: (category: Category) => void
}

const ModalEditCategory = ({ active, setActive, category, updatePage}: IEditCategory) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        setName(category.name);
        setDescription(category.description);
    }, [category, setName, setDescription]);

    function updateClick() {
        updatePage({id:category.id, name, description})
        setActive(false);
    }

    return (
        <Modal title="Редактирование категории"
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
                
            </div>
            <Field className={fields.description}
                title="Описание"
                hint=""
                value={description}
                setValue={setDescription} />
        </Modal>
    );
}

export default ModalEditCategory;