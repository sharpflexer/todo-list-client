
import IHasItem from "../../../../interfaces/IHasItem";
import IModalContent from "../../../../interfaces/IModalContent";
import Category from "../../../../types/Category";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css";


const ModalDeleteCategory = ({active, setActive, loadItem, item}:IModalContent<number> & IHasItem<Category> ) => {
    function deleteClick() {
        loadItem(item.id)
        setActive(false);
    }

    return (
        <Modal title="Удаление категории"
            submitName="Да"
            cancelName="Нет"
            active={active}
            setActive={setActive}
            submitClick={deleteClick}>
            <label className={fields.deleteMessage}>Вы уверены, что хотите удалить категорию "{item.name}"?</label>
        </Modal>
    );
}


export default ModalDeleteCategory;