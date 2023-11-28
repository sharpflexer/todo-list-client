import IActive from "./IActive";

interface IModal extends IActive{
    title: string;
    submitName: string;
    cancelName: string;
    submitClick: () => void;
    children: React.ReactNode;
}

export default IModal;