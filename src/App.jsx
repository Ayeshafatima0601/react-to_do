import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CreatePage from './Components/CreatePage';
import EditPage from './Components/EditPage';

function App() {
  // Load todos from local storage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Upadte when todo changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Update when todo is created
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Update when todo is edited
  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  // Update when todo is deleted
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
