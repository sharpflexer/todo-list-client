import { useState } from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import CategoryList from './components/CategoryList/CategoryList';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // For Create Modals
  const [taskModalActive, setTaskModalActive] = useState<boolean>(false);
  const [categoryModalActive, setCategoryModalActive] = useState<boolean>(false);

  // For Lists
  const [taskListActive, setTaskListActive] = useState<boolean>(true);
  const [categoryListActive, setCategoryListActive] = useState<boolean>(true);

  return (
    <div className="App">
      <Router>
        <Header createLinkText={taskListActive ? "Добавить задачу" : "Добавить категорию"}
          setModalActive={taskListActive ? setTaskModalActive : setCategoryModalActive}
          setTasksActive={setTaskListActive}
          setCategoriesActive={setCategoryListActive} />
        <Routes>
          <Route path="*" element={
            <Navigate to="tasks" replace={true} />
          } />
          <Route path="tasks" element={
            <TaskList active={taskListActive}
              createActive={taskModalActive}
              setCreateActive={setTaskModalActive} />
          } />
          <Route path="categories" element={
            <CategoryList active={categoryListActive}
              createActive={categoryModalActive}
              setCreateActive={setCategoryModalActive} />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
