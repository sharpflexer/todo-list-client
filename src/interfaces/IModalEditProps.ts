import Task from "../types/Task";
import IModalProps from "./IModalProps";

interface IModalEditProps extends IModalProps {
    task: Task;
    updatePage: (task: Task) => void;
}

export default IModalEditProps;