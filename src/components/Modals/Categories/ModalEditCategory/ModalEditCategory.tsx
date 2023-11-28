import { useState, useEffect } from "react";
import Field from "../../../Field/Field";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css";
import IModalContent from "../../../../interfaces/IModalContent";
import Category from "../../../../types/Category";
import IHasItem from "../../../../interfaces/IHasItem";



const ModalEditCategory = ({ active, setActive, loadItem, item}: IModalContent<Category> & IHasItem<Category>) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        setName(item.name);
        setDescription(item.description);
    }, [item, setName, setDescription]);

    function updateClick() {
        loadItem({id:item.id, name, description})
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