import Task from "../types/Task";
import IModalProps from "./IModalProps";

interface IModalCreateProps extends IModalProps {
    updatePage: (task: Task) => void;
}

export default IModalCreateProps;