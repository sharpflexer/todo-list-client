import { Category } from "../../../CategoryList/CategoryList";
import Modal, { IModalProps } from "../../Modal/Modal";
import fields from "../../fields.module.css";

interface IDeleteCategory extends IModalProps {
    category: Category;
    deleteCategory: (id: number) => void
}

const ModalDeleteCategory = ({active, setActive, deleteCategory, category}:IDeleteCategory) => {
    function deleteClick() {
        deleteCategory(category.id!)
        setActive(false);
    }

    return (
        <Modal title="Удаление категории"
            submitName="Да"
            cancelName="Нет"
            active={active}
            setActive={setActive}
            submitClick={deleteClick}>
            <label className={fields.deleteMessage}>Вы уверены, что хотите удалить категорию "{category.name}"?</label>
        </Modal>
    );
}


export default ModalDeleteCategory;