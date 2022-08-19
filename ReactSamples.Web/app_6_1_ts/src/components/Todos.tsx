import * as React from 'react';
import TodoModel from '../models/todoModel';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

var Todos: React.FC<{ items: TodoModel[] }>;
Todos = function (props) {

    function addTodoHandler(todoText: string) {

      //todo: add state handling
    }

    return <div>
        <NewTodo onAddTodo={addTodoHandler} />
        <br />
        <ul>
            {props.items.map(x =>

                <TodoItem key={x.id} text={x.text} />

            )}
        </ul>
    </div>;
}



export default Todos;