import { useRef, useState } from "react";
import Field from "../../../Field/Field";
import Modal, { IModalProps } from "../../Modal/Modal";
import fields from "../../fields.module.css";
import { RequestService } from "../../../../services/RequestService";
import { Category } from "../../../CategoryList/CategoryList";

export interface ICategoryFields {
    name: string;
    description: string;
    setName: (value: string) => void;
    setDescription: (value: string) => void;
}

export interface ICategoryCreateProps extends IModalProps {
    updatePage: (category: Category) => void;
}

function ModalCreateCategory({active, setActive, updatePage} : ICategoryCreateProps) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function createClick() {      
        let category: Category = {
            id: 0,
            name, 
            description
        }
        RequestService.createCategory(category);
        updatePage(category);
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