import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

//COMPONENTE QUE PERMITE CREAR BOTON QUE APERTURA MODAL PARA LA CREACIÓN DE NUEVOS TO DOS
const CreateTodoButton = () => {
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(!openModal); // se actualiza el React hook para la apertura del modal a true 
    }
    return (
        <button onClick={onClickButton} className="mainBtn"> 
            < BsFillPlusCircleFill className={`buttonAdd ${openModal && 'buttonClose'}`} />
        </button>
    )
}
export { CreateTodoButton };
