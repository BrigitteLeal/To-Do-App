import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

//COMPONENTE PRINCIPAL - STATEFUL
function App() { 
  
  return [ // TodoProvider envuelve a todos los componentes que serán los consumidores del contexto (props)
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  ];
}

export default App;