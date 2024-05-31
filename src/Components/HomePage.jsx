import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage({ todos, editTodo, deleteTodo }) {
    const handleDelete = (id) => {
        deleteTodo(id);
    };

    const [checkedTodos, setCheckedTodos] = useState([]);

    const toggleTodo = (id) => {
        if (checkedTodos.includes(id)) {
            setCheckedTodos(checkedTodos.filter(todoId => todoId !== id));
        } else {
            setCheckedTodos([...checkedTodos, id]);
        }
    };

    const handleDoubleClick = (id) => {
        toggleTodo(id);
    };

    return (
        <div>
            <button className='createTodo'>
                <Link to="/create" className="app-link">Create New Todo</Link>
            </button>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={`todo-item ${checkedTodos.includes(todo.id) ? 'checked' : ''}`} onDoubleClick={() => handleDoubleClick(todo.id)}>
                    <input
                                type="checkbox"
                                checked={checkedTodos.includes(todo.id)}
                                onChange={() => toggleTodo(todo.id)}
                            />
                        <div className="todo-text">{todo.text}</div>
                        <div className="todo-actions">
                            <button>
                                <Link to={`/edit/${todo.id}`} className="app-link-1">Edit</Link>
                            </button>
                            <button onClick={() => handleDelete(todo.id)} className='delete'>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
