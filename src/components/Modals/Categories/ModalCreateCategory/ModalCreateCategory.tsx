import { useState } from "react";
import { RequestService } from "../../../../services/RequestService";
import Category from "../../../../types/Category";
import Field from "../../../Field/Field";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css";
import IModalContent from "../../../../interfaces/IModalContent";


function ModalCreateCategory({active, setActive, loadItem} : IModalContent<Category>) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function createClick() {      
        let category: Category = {
            id: 0,
            name, 
            description
        }
        RequestService.createCategory(category).then(item => loadItem(item));;
    }

    return (
        <Modal title="Создание категории"
            submitName="Создать"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={createClick}>

            <div className={fields.topLayer}>
                <Field className={fields.name}
                    title="Имя"
                    hint="Введите название категории"
                    value={name}
                    setValue={setName}>
                    <div className="redStar">*</div>
                </Field>
            </div>
            <Field className={fields.description}
                title="Описание"
                hint="Введите описание категории"
                value={description}
                setValue={setDescription} />

        </Modal>
    );
}

export default ModalCreateCategory;