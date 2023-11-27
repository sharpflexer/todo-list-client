import Category from "../types/Category";
import IModalProps from "./IModalProps";

interface IDeleteCategory extends IModalProps {
    category: Category;
    deleteCategory: (id: number) => void;
}

export default IDeleteCategory;