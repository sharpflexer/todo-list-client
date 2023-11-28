import { Link } from "react-router-dom";
import IHeader from "../../interfaces/IHeader";
import classes from "./Header.module.css";

function Header({ createLinkText, setModalActive }: IHeader) {

    return (
        <div className={classes.layout}>
            <label className={classes.todo}>ToDo List</label>
            <Link to="tasks" className={classes.element + " " + classes.tasks}>Задачи</Link>
            <div className={classes.vbar}>|</div>
            <Link to="categories" className={classes.element + " " + classes.categories}>Категории</Link>
            <div className={classes.linkContainer}>
                <div className={classes.element + " " + classes.createLink}
                    onClick={() => setModalActive(true)}>
                    {createLinkText}
                </div>
            </div>
        </div>
    );
}

export default Header;