import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// delete todos
function HomePage({ todos, editTodo, deleteTodo }) {
    const handleDelete = (id) => {
        deleteTodo(id);
    };

    return (
        <div>
            <button className='createTodo'>
                <Link to="/create" className="app-link">Create New Todo</Link>
            </button>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
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
