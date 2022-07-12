import React from 'react';
import './TodoSearch.css'
import { FaSearch } from "react-icons/fa";
import { TodoContext } from '../TodoContext';

// COMPONENTE ENCARGADO DE PERMITIR LA BUSQUEDA DE TO DOS
const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => { // función que permite obtener el valor del input a partir del evento (reacción que hizo el usuario)
        console.log(event.target.value); 
        setSearchValue(event.target.value); //event: teclear, target: en el input, value: x valor ej "cebolla". Se actualiza el estado con el valor del input
    }
    return (
        <>
            <div className='inputContainer'>
                <input 
                    className='searchTask' 
                    placeholder="Search task"
                    value={ searchValue } // valor por defecto en el input -> ""
                    onChange={ onSearchValueChange } // onChange reacciona ante cada cambio que hace el usuario en el input y se ejecuta la función mencionada
                />
                <div className='iconContainer'>
                    < FaSearch className='icon' />
                </div>
                
            </div>
        </>
    )
}

export { TodoSearch } ;

