import Category from "../types/Category";
import IModalProps from "./IModalProps";

interface ICategoryCreateProps extends IModalProps {
    updatePage: (category: Category) => void;
}

export default ICategoryCreateProps;