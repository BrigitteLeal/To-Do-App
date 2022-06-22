import React from 'react';
import './TodoCounter.css';

// COMPONENTE ENCARGADO DE CONTAR LOS TO DOS COMPLETADOS Y TOTAL
const TodoCounter = ({ total, completed }) => { // props que se reciben de AppUI
    return (
        <h2>Has completado {completed} de {total} TO DOs</h2>
    )
}
export { TodoCounter } ;