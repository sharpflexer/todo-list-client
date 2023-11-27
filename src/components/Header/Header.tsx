import { Link, redirect, useNavigate } from "react-router-dom";
import IActive from "../../interfaces/IActive";
import classes from "./Header.module.css";

function Header({ createLinkText, setModalActive, setTasksActive, setCategoriesActive }: IActive) {
    //TODO: Обернуть tasklist в context
    return (
        <div className={classes.layout}>
            <label className={classes.todo}>ToDo List</label>
            <Link to="tasks" className={classes.element + " " + classes.tasks}>Задачи</Link>
            <div className={classes.vbar}>|</div>
            <Link to="categories" className={classes.element + " " + classes.categories}>Категории</Link>
            <div className={classes.element + " " + classes.createLink} onClick={() => setModalActive(true)}>{createLinkText}</div>
        </div>
    );
}

export default Header;