import Task from "../types/Task";
import IModalProps from "./IModalProps";

interface IModalDeleteProps extends IModalProps {
    task: Task;
    deletePage: (id: number) => void;
}

export default  IModalDeleteProps;