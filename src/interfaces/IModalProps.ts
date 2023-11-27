interface IModalProps {
    title?: string;
    submitName?: string;
    cancelName?: string;
    active: boolean;
    setActive: (value: boolean) => void;
    submitClick?: () => void;
    children?: React.ReactNode;
}

export default IModalProps;