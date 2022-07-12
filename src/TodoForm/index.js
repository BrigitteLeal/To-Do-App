import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault(); // evita que se recargue la pagina por defecto
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit} className="formContainer">
            <label>Write a new to do</label>
            <textarea 
                className='input' 
                placeholder='Write here' 
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='buttonContainer'>
                <button onClick={onCancel} type='button' className='textareaBtn cancelBtn'>Cancel</button>
                <button type='submit' className='textareaBtn addBtn'>Add</button>
            </div> 
        </form>
    )
}

export { TodoForm };
