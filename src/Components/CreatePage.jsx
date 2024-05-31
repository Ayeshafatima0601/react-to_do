import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function CreatePage({ addTodo }) {
    const [todo, setTodo] = useState('');
    const navigate = useNavigate();

    // Create a navigation for the addTodo action
    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({ id: Math.random(), text: todo });
        navigate('/');
    };

    return (
        <div className='create-page-container'>
            <h2>Create New Todo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Todo:
                    <input type="text" value={todo} onChange={handleChange} required />
                </label>
                <button type="submit" className='add'>Add</button>
            </form>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default CreatePage;
