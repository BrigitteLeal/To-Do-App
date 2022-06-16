import React from 'react';
import { Header } from './Header';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButtom';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Pelar papa', completed: true},
  { text: 'Hervir brocoli', completed: false},
]

const App = () => { // creación de componentes por convención inician con mayuscula
  return ( 
    <React.Fragment>
      <Header />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem  
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

