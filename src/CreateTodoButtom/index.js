import React from "react";
import './CreateTodoButton.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

//COMPONENTE QUE PERMITE CREAR BOTON QUE APERTURA MODAL PARA LA CREACIÓN DE NUEVOS TO DOS
const CreateTodoButton = () => {
    const onClickButton = (msg) => {
        alert(msg);
    }
    return (
        <button onClick={() => onClickButton('Se abre modal') }> 
            < BsFillPlusCircleFill className="buttonAdd" />
        </button>
    )
}
export { CreateTodoButton };

//envolver los metodos en arrow functions para que no se ejecuten automaticamente sino cuando se desencadene un evento o función
