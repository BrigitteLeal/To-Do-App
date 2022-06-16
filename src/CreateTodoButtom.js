import React from "react";
import './CreateTodoButton.css';
import { BsFillPlusCircleFill } from "react-icons/bs";
const CreateTodoButton = () => {
    return (
        <button>
            < BsFillPlusCircleFill className="buttonAdd" />
        </button>
    )
}
export { CreateTodoButton };