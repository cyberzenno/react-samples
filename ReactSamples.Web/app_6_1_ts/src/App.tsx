import * as React from 'react';

import './App.css';
import Todos from './components/Todos';
import TodoModel from './models/todoModel';

var ourTodos = [new TodoModel("Apples"), new TodoModel("Pears"), new TodoModel("Stairs")];

function App() {
    return <Todos items={ourTodos} />
}

export default App;
