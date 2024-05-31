import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EditPage({ todos, editTodo }) {
    const { id } = useParams();
    const todoToEdit = todos.find(todo => todo.id === parseFloat(id));
    const [todo, setTodo] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (todoToEdit) {
            setTodo(todoToEdit.text);
        }
    }, [todoToEdit]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editTodo(parseFloat(id), todo);
        navigate('/');
    };

    return (
        <div className="edit-page-container">
            <form onSubmit={handleSubmit}>
                <label>Edit Todo:
                <input id="todoInput" type="text" value={todo} onChange={handleChange} />
                </label>
                <button type="submit" className="save-btn">Save</button>
            </form>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
}

export default EditPage;
