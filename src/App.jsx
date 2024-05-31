import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CreatePage from './Components/CreatePage';
import EditPage from './Components/EditPage';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">TO-DO LIST</h1>
        <Routes>
          <Route path="/" element={<HomePage todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />} />
          <Route path="/create" element={<CreatePage addTodo={addTodo} />} />
          <Route path="/edit/:id" element={<EditPage todos={todos} editTodo={editTodo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
