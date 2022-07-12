import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext(); // Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis

function TodoProvider(props) { // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
    const {
        item: todos, // // Desestructuramos los nuevos datos de nuestro custom hook, traidos desde useLocalStorage y se renombran
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []); // se llama a la función useLocalStorage con los argumentos TODOS_V1 y [] que devuelve array con 2 elementos. elemento[0] estado inicial, elemento[1] la funcion que actualiza el estado
    const [searchValue, setSearchValue] = React.useState(''); // React hook que cambia el estado del input
    const [openModal, setOpenModal] = React.useState(false); //React hook para abrir el modal de creación de nuevo to do
    
    //LOGICA QUE PERMITE CONTAR LOS TO DOS COMPLETADOS Y TOTAL
    const completedTodos = todos.filter(todo => todo.completed).length; //filtrar array para identificar cual está completado, .length para determinar cuantos
    const totalTodos = todos.length; // cantidad de elementos dentro del array
    //LOGICA PARA BUSCAR TO DOS EN EL INPUT
    let searchedTodos = [];
    if (!searchValue.length >= 1) { // cuenta la cantidad de letras. Si NO hay >=1 letras (es decir, 0) el input está vacio
        searchedTodos = todos; // el array searched va a tener la lista de to dos que hay en el estado todos sin modificación
    } else {
        searchedTodos = todos.filter(todo => { 
        const todoText = todo.text.toLowerCase(); //cada to do filtrado del array de to dos se transforma a minusculas (TODOS)
        const searchText = searchValue.toLowerCase(); //se transforma a minusculas el valor colocado en el input
        return todoText.includes(searchText); //¿el valor colocado en el input está incluido entre la lista de to dos? retorna elementos de array que serán impresos
    })
    }
    //LÓGICA PARA MARCAR COMO COMPLETADO UN TO DO
    const completeTodo = (text) => { //text es el identificador de cada uno de los to dos, su texto
        const todoIndex = todos.findIndex(todo => todo.text === text); //se examina to do por to do cual tiene el mismo texto y se obtiene su indice
        const newTodos = [...todos]; // se crea nuevo array con la copia del array original de to dos
        newTodos[todoIndex].completed = true; // el atributo completed del array[#] pasa a ser true
        saveTodos(newTodos); //newTodos (array actualizado) se usa como argumento de función saveTodos. Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con la función
    }
    //LOGICA PARA ELIMINAR UN TO DO
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1); // .splice elimina 1 elemento apartir del indice previamente encontrado con findIndex
        saveTodos(newTodos);
    }
    //LOGICA PARA AÑADIR TO DO
    const addTodo = (text) => {
        const newTodos = [...todos]; 
        newTodos.push({
            text,
            completed: false,
        }); 
        saveTodos(newTodos); 
    }
    return [
        <TodoContext.Provider value={{ // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    ]
}

export { TodoContext, TodoProvider }; // Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto