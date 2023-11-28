import IHasItem from "../../../../interfaces/IHasItem";
import IModalContent from "../../../../interfaces/IModalContent";
import Task from "../../../../types/Task";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css"

const ModalDeleteTask = ({ active, setActive, loadItem, item}: IModalContent<number> & IHasItem<Task>) => {

    function deleteClick() {
        loadItem(item.id);
        setActive(false);
    }

    return (
        <Modal title="Удаление задачи"
            submitName="Да"
            cancelName="Нет"
            active={active}
            setActive={setActive}
            submitClick={deleteClick}>
            <label className={fields.deleteMessage}>Вы уверены, что хотите удалить задачу {item.name}?</label>
        </Modal>
    );
}

export default ModalDeleteTask;