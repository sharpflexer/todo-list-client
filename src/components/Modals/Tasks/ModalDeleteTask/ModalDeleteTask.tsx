import IModalDeleteProps from "../../../../interfaces/IModalDeleteProps";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css"

const ModalDeleteTask = ({ active, setActive, task, deletePage }: IModalDeleteProps) => {

    function deleteClick() {
        deletePage(task.id);
        setActive(false);
    }

    return (
        <Modal title="Удаление задачи"
            submitName="Да"
            cancelName="Нет"
            active={active}
            setActive={setActive}
            submitClick={deleteClick}>
            <label className={fields.deleteMessage}>Вы уверены, что хотите удалить задачу {task.name}?</label>
        </Modal>
    );
}

export default ModalDeleteTask;