import { useRef, useState } from "react";
import Field from "../../../Field/Field";
import Button from "../../../Button/Button";
import { Task } from "../../../TaskList/TaskList";
import Modal, { IModalProps } from "../../Modal/Modal";

interface IModalDeleteProps extends IModalProps{
    task: Task;
    deletePage: (id: number) => void
}

const ModalDeleteTask = ({ active, setActive, task, deletePage }: IModalDeleteProps) => {

    function deleteClick() {
        deletePage(task.id);
    }

    return (
        <Modal active={active} setActive={setActive} submitClick={deleteClick}>
            <div className="modalContent"></div>
            <div className="title">Удаление задачи</div>
            <label className="deleteMessage">Вы уверены, что хотите удалить задачу {task.name}?</label>
            <Button className="submit"
                text="Да"
                onAction={deleteClick} />

            <Button className="cancel"
                text="Нет"
                onAction={() => { }} />

            <img className="close" src="svg/close.svg" alt="" onClick={() => { }}></img>
        </Modal>
    );
}

export default ModalDeleteTask;