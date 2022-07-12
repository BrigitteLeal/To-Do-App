import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

// COMPONENTE ENCARGADO DE CONTAR LOS TO DOS COMPLETADOS Y TOTAL
const TodoCounter = () => { 
    const { totalTodos, completedTodos } = React.useContext(TodoContext); // se recibe solo los valores de las props necesarias para el funcionamiento del componente
    return (
        <h2>You've completed {completedTodos} out of {totalTodos} TO DOs</h2>
    )
}
export { TodoCounter } ;