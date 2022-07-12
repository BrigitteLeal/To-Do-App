import React from 'react';

//LOGICA PARA PERSISTIR DATOS CON LOCALSTORAGE - CUSTOM REACT HOOK
function useLocalStorage (itemName, initialValue) { // Se recibe como parámetros el nombre y el estado inicial de nuestro item.

    // LOGICA DEL USEREDUCER
    const initialState = ({initialValue}) => ({ //valores iniciales de los estados //el objeto está envuelto entreparentesis para hacer un return implicito
        loading: true,
        error: false,
        item: initialValue,
    });
    const actionTypes = {
        error: 'ERROR',
        success: 'SUCCESS',
        save: 'SAVE',
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case actionTypes.error:
                return {
                    ...state,
                    error: true,
                }
            case actionTypes.success:
                return {
                    ...state,
                    error: false,
                    loading: false,
                    item: action.payload,
                }
            case actionTypes.save:
                return {
                    ...state,
                    item: action.payload,
                }
            default:
                return {
                    ...state,
                }
        }
    }
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue })); //React hook que contendrá todas las actualizaciones del estado. ESTADO DECLARATIVO

    // ESTADOS IMPERATIVOS
    // const [loading, setLoading] = React.useState(true); // React hook para estado de carga
    // const [error, setError] = React.useState(false); // React hook para estado de error
    // const [item, setItem] = React.useState(initialValue); // React hook que cambia la lista de to dos a medida que lo modifica el usuario

    const {
        loading,
        error,
        item,
    } = state;

    // ACTIONS CREATORS
    const onError = (error) =>  dispatch({ type: actionTypes.error, payload: error }) ;
    const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

    React.useEffect(() => { //React hook que permite ejecutar codigo antes de renderizarse el navegador. Muestra estados de carga
        setTimeout(() => { // Simula tiempo de espera cuando hay llamadas a API - 1seg
            try {
                //LOGICA PARA DETERMINAR SI LOCALSTORAGE ESTA VACIO O TIENE ITEMS
                const localStorageItem = localStorage.getItem(itemName); // .getItem obtiene el elemento guardado en el localStorage con el nombre (itemName) 
                let parsedItem; // creación de array vacio para nuevos usuarios que no han creado ningún to do
                if (!localStorageItem) { // verifica si es un array vacio, string vacio, null, undefined o false, es decir, si es un usuario nuevo no existirá ningun item en localStorage 
                    localStorage.setItem(itemName, JSON.stringify(initialValue)); // .setItem agrega datos al localStorage recibe 2 parametros(nombre, valor), valor siempre string //JSON.stringify transforma a string
                    parsedItem = initialValue; // se establece nuevo valor de parseItem, siendo un []
                } else { // Si existen TODOs en el localStorage de otras versiones los regresamos como nuestros todos
                    parsedItem = JSON.parse(localStorageItem); // se parsea el elemento transformandolo de vuelta a un array
                }
                onSuccess(parsedItem);
                // setItem(parsedItem); //Actualizo react hook con la nueva información de to dos
                // setLoading(false); // Actualizo react hook ya que terminó de cargar
            } catch(error) {
                onError(error);
                // setError(error);
            }
        }, 1000);
    }, []);
        
    //LOGICA QUE PERMITE CONECTAR FUNCIÓN USELOCALSTORAGE CON FUNCIONES COMPLETOTODO Y DELETETODO (actualiza nuestro estado para actualizar nuestro localStorage.)
    const saveItem = (newItem) => { 
        try {
            const stringifiedItem = JSON.stringify(newItem); // array se pasa a string
            localStorage.setItem(itemName, stringifiedItem); //se guarda en el localStorage nueva información para que al recargar se mantenga la lista de to dos actualizada (es decir, si hay to dos completados o eliminados)
            onSave(newItem);
            // setItem(newItem); // se actualiza el estado del React hook
        } catch(error) {
            onError(error);
            // setError(error);
        }
    }
    
    return { // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
        item,
        saveItem,
        loading,
        error,
    } 
}

export { useLocalStorage };