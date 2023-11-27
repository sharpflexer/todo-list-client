import Category from "../types/Category";
import IModalProps from "./IModalProps";

interface IEditCategory extends IModalProps {
    category: Category;
    updatePage: (category: Category) => void;
}

export default IEditCategory;