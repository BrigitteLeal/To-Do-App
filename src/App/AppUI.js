import React from 'react';
//IMPORTANDO LOS COMPONENTES DE LA APP
import { Header } from '../Header';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButtom';

//COMPONENTE QUE SE ENCARGA DE LA MAQUETACIÓN DEL PROYECTO - STATELESS
function AppUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }) {
    return (
        <React.Fragment>
            <Header />
            <TodoCounter 
                total= {totalTodos}
                completed= {completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {searchedTodos.map(todo => ( //se mapea el array para obtener los items
                    <TodoItem  
                        key={todo.text} // key: identificador único que le permite a React identificar el elemento dentro de una lista
                        text={todo.text} // texto del to do
                        completed={todo.completed} // booleano que indica si el to do esta completado o no
                        onComplete={() => completeTodo(todo.text)} // se llama a la función completeTodo cuyo argumento es el todo.text
                        onDelete={() => deleteTodo(todo.text)}
                    />))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    )
};

export { AppUI };