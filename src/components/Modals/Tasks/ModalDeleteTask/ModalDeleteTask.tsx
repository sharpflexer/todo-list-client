import classes from "../../fields.module.css"
import { Task } from "../../../TaskList/TaskList";
import Modal, { IModalProps } from "../../Modal/Modal";

interface IModalDeleteProps extends IModalProps {
    task: Task;
    deletePage: (id: number) => void
}

const ModalDeleteTask = ({ active, setActive, task, deletePage }: IModalDeleteProps) => {

    function deleteClick() {
        deletePage(task.id);
        setActive(false);
    }

    return (
        <Modal active={active} setActive={setActive} submitClick={deleteClick}>
            <label className={classes.deleteMessage}>Вы уверены, что хотите удалить задачу {task.name}?</label>
        </Modal>
    );
}

export default ModalDeleteTask;