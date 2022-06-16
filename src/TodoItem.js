import React from "react";
import './TodoItem.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span className="Icon">
                < AiFillCheckCircle className={`Icon-check ${props.completed && 'Icon-check--active'}`}/>
            </span>
            <p className={`TodoItem-p ${props.completed &&'TodoItem-p--complete'}`}>{ props.text }</p>
            <span className="Icon IconContainer">
                <FaTrash className="Icon-delete"/>
            </span>
        </li>
    )
}
export { TodoItem };