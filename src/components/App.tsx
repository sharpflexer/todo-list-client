import { useState } from 'react';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import CategoryList from './CategoryList/CategoryList';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // For Create Modals
  const [taskModalActive, setTaskModalActive] = useState<boolean>(false);
  const [categoryModalActive, setCategoryModalActive] = useState<boolean>(false);

  const onTasks = useLocation().pathname.includes("tasks");
  return (
    <div className="App">
      <Header createLinkText={onTasks ? "Добавить задачу" : "Добавить категорию"}
        setModalActive={onTasks ? setTaskModalActive : setCategoryModalActive} />
      <Routes>
        <Route path="*" element={
          <Navigate to="tasks" replace={true} />
        } />
        <Route path="tasks" element={
          <TaskList createActive={taskModalActive}
            setCreateActive={setTaskModalActive} />
        } />
        <Route path="categories" element={
          <CategoryList createActive={categoryModalActive}
            setCreateActive={setCategoryModalActive} />
        } />
      </Routes>
    </div>
  );
}

export default App;
