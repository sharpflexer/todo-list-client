import React, { useState } from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modals/Modal/Modal';
import ModalCreateTask from './components/Modals/Tasks/ModalCreateTask/ModalCreateTask';
import ModalCreateCategory from './components/Modals/Categories/ModalCreateCategory/ModalCreateCategory';
import CategoryList from './components/CategoryList/CategoryList';

function App() {
  const [taskActive, setTaskActive] = useState<boolean>(false);
  const [categoryActive, setCategoryActive] = useState<boolean>(false);

  const [tasksActive, setTasksActive] = useState<boolean>(true);
  const [categoriesActive, setCategoriesActive] = useState<boolean>(false);

  return (
    <div className="App">
      <Header createLinkText= {tasksActive ? "Добавить задачу" : "Добавить категорию"}
        setModalActive = {tasksActive ? setTaskActive : setCategoryActive} 
        setTasksActive = {setTasksActive} 
        setCategoriesActive={setCategoriesActive}/>
      <TaskList active = {tasksActive}/>
      <CategoryList active = {categoriesActive}/>
      <ModalCreateTask active={taskActive} setActive={setTaskActive}/>
      <ModalCreateCategory active={categoryActive} setActive={setCategoryActive}/>
    </div>
  );
}

export default App;
