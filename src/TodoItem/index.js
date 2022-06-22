import React from "react";
import './TodoItem.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

//COMPONENTE QUE PERMITE REUTILIZAR CODIGO CADA VEZ QUE SE CREA UN TO DO
const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span className="Icon" onClick={ props.onComplete }>
                < AiFillCheckCircle className={`Icon-check ${props.completed && 'Icon-check--active'}`}/> 
                {/* condicional, si el componente capta que la props completed es true (!false, undefinited, null, []) se añade la clase Icon-check--active al elemento  */}
            </span>
            <p className={`TodoItem-p ${props.completed &&'TodoItem-p--complete'}`}>{ props.text }</p>
            <span className="Icon IconContainer" onClick={ props.onDelete }>
                <FaTrash className="Icon-delete"/>
            </span>
        </li>
    )
}
export { TodoItem };