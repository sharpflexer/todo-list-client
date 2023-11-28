import IActive from "./IActive";
import IModal from "./IModal";

interface IModalContent<T> extends IActive{
    loadItem: (item: T) => void;
}

export default IModalContent;