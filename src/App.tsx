import React, { useState } from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modals/Modal/Modal';
import ModalCreateTask from './components/Modals/Tasks/ModalCreateTask/ModalCreateTask';
import ModalCreateCategory from './components/Modals/Categories/ModalCreateCategory/ModalCreateCategory';
import CategoryList from './components/CategoryList/CategoryList';

function App() {
  // For Create Modals
  const [taskModalActive, setTaskModalActive] = useState<boolean>(false);
  const [categoryModalActive, setCategoryModalActive] = useState<boolean>(false);

  // For Lists
  const [taskListActive, setTaskListActive] = useState<boolean>(true);
  const [categoryListActive, setCategoryListActive] = useState<boolean>(false);

  return (
    <div className="App">
      <Header createLinkText= {taskListActive ? "Добавить задачу" : "Добавить категорию"}
        setModalActive = {taskListActive ? setTaskModalActive : setCategoryModalActive} 
        setTasksActive = {setTaskListActive} 
        setCategoriesActive={setCategoryListActive}/>
      <TaskList active = {taskListActive} createActive = {taskModalActive} setCreateActive = {setTaskModalActive}/>
      <CategoryList active = {categoryListActive} createActive = {categoryModalActive} setCreateActive = {setCategoryModalActive}/>
    </div>
  );
}

export default App;
