import Modal, { IModalProps } from "../../Modal/Modal";
import fields from "../../fields.module.css";

export type Category = {
    id: number;
    name: string;
    description: string;
}

interface IDeleteCategory extends IModalProps {
    category: Category;
    deleteCategory: (id: number) => void
}

const ModalDeleteCategory = ({active, setActive, deleteCategory, category}:IDeleteCategory) => {
    function deleteClick() {
        deleteCategory(category.id)
        setActive(false);
    }

    return (
        <Modal title="Создание категории"
            submitName="Создать"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={deleteClick}>
            <label className={fields.deleteMessage}>Вы уверены, что хотите удалить категорию "{category.name}"?</label>
        </Modal>
    );
}

function deleteCategory(id: number) {
    fetch('http://192.168.100.206:8089/api/ToDoList/DeleteCategory', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: { id }
        })
    });
}



export default ModalDeleteCategory;