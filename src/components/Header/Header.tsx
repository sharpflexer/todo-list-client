import IActive from "../../interfaces/IActive";
import classes from "./Header.module.css";

function Header({createLinkText, setModalActive, setTasksActive, setCategoriesActive }: IActive) {
    function enableTasks(){
        setCategoriesActive(false);
        setTasksActive(true);
    }
    
    function enableCategories(){
        setTasksActive(false);
        setCategoriesActive(true);
    }
    
    //TODO: Обернуть tasklist в context
    return (
        <div className={classes.layout}>
            <label className={classes.todo}>ToDo List</label>
            <div className={classes.element + " " + classes.tasks} onClick={enableTasks}>Задачи</div>
            <div className={classes.vbar}>|</div>
            <div className={classes.element + " " + classes.categories} onClick={enableCategories}>Категории</div>
            <div className={classes.element + " " + classes.createLink} onClick={() => setModalActive(true)}>{createLinkText}</div>
        </div>
    );
}

export default Header;