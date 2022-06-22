import React from "react";

//COMPONENTE QUE MUESTRA LA LISTA DE TO DOS
const TodoList = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export { TodoList };