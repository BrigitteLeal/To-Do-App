import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Pelar papa', completed: false},
//   { text: 'Hervir brocoli', completed: false},
// ]

//LOGICA PARA PERSISTIR DATOS CON LOCALSTORAGE - CUSTOM REACT HOOK
function useLocalStorage (itemName, initialValue) { // Se recibe como parámetros el nombre y el estado inicial de nuestro item.

  //LOGICA PARA DETERMINAR SI LOCALSTORAGE ESTA VACIO O TIENE ITEMS
  const localStorageItem = localStorage.getItem(itemName); // .getItem obtiene el elemento guardado en el localStorage con el nombre (itemName) 
  let parsedItem; // creación de array vacio para nuevos usuarios que no han creado ningún to do
  if (!localStorageItem) { // verifica si es un array vacio, null, undefined o false, es decir, si es un usuario nuevo no existirá ningun item en localStorage 
    localStorage.setItem(itemName, JSON.stringify(initialValue)); // .setItem agrega datos al localStorage recibe 2 parametros(nombre, valor), valor siempre string //JSON.stringify transforma a string
    parsedItem = initialValue; // se establece nuevo valor de parseItem, siendo un []
  } else { // Si existen TODOs en el localStorage de otras versiones los regresamos como nuestros todos
    parsedItem = JSON.parse(localStorageItem); // se parsea el elemento transformandolo de vuelta a un array
  }
  const [item, setItem] = React.useState(parsedItem); // React hook que cambia la lista de to dos a medida que lo modifica el usuario

  //LOGICA QUE PERMITE CONECTAR FUNCIÓN USELOCALSTORAGE CON FUNCIONES COMPLETOTODO Y DELETETODO (actualiza nuestro estado para actualizar nuestro localStorage.)
  const saveItem = (newItem) => { 
    const stringifiedItem = JSON.stringify(newItem); // array se pasa a string
    localStorage.setItem(itemName, stringifiedItem); //se guarda en el localStorage nueva información para que al recargar se mantenga la lista de to dos actualizada (es decir, si hay to dos completados o eliminados)
    setItem(newItem); // se actualiza el estado del React hook
  }

  return [ // devuelve estas variables 
    item,
    saveItem,
  ]
}

//COMPONENTE PRINCIPAL - STATEFUL
function App() { 
  const [patito, savePatito] = useLocalStorage('PATITO_V1', 'FERNANDO');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // se llama a la función useLocalStorage con los argumentos TODOS_V1 y [] que devuelve array con 2 elementos. elemento[0] estado inicial, elemento[1] la funcion que actualiza el estado
  const [searchValue, setSearchValue] = React.useState(''); // React hook que cambia el estado del input

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
  return [
    <p>{patito}</p>,
    <AppUI 
      totalTodos= {totalTodos} // mandando props al componente AppUI
      completedTodos= {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />,
  ];
}

export default App;

