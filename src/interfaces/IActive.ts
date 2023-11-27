interface IActive {
    createLinkText: string;
    setModalActive: (value: boolean) => void;
    setTasksActive: (value: boolean) => void;
    setCategoriesActive: (value: boolean) => void;
}

export default IActive;