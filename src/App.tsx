import React, { useState } from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modals/Modal/Modal';
import ModalCreateTask from './components/Modals/Tasks/ModalCreateTask/ModalCreateTask';

function App() {
  const [taskActive, setTaskActive] = useState<boolean>(false);
  const [categoryActive, setCategoryActive] = useState<boolean>(false);


  return (
    <div className="App">
      <Header setModalActive = {setTaskActive}/>
      <TaskList />
      <ModalCreateTask active={taskActive} setActive={setTaskActive}/>
    </div>
  );
}

export default App;
