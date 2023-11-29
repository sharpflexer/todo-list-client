import React from "react";
import Task from "../types/Task";
import Category from "../types/Category";

interface IListContext{
    tasks: Task[];
    categories: Category[];
}

const defaultState = {
    tasks: [],
    categories: []
}

const ListContext = React.createContext<IListContext>(defaultState);

export default ListContext;