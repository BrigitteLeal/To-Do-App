import React from 'react';
//IMPORTANDO LOS COMPONENTES DE LA APP
import { Header } from '../Header';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButtom';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import LoadingSpinner  from '../LoadingSpinner';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import './App.css';

//COMPONENTE QUE SE ENCARGA DE LA MAQUETACIÓN DEL PROYECTO - STATELESS
function AppUI () {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext) // React hook que trae el value que retorna el componente TodoContext
    return (
        <React.Fragment>
            <Header />
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {searchedTodos.map(todo => ( //se mapea el array para obtener los items
                    <TodoItem  
                        key={todo.text} // key: identificador único que le permite a React identificar el elemento dentro de una lista
                        text={todo.text} // texto del to do
                        completed={todo.completed} // booleano que indica si el to do esta completado o no
                        onComplete={() => completeTodo(todo.text)} // se llama a la función completeTodo cuyo argumento es el todo.text
                        onDelete={() => deleteTodo(todo.text)}
                    />))}
                {error && < TodosError />}
                {loading && <LoadingSpinner/>}
                {/* <LoadingSpinner /> */}
                {(!loading && !searchedTodos.length) && < EmptyTodos />}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
};

export { AppUI };