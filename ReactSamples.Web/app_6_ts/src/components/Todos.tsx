import * as React from 'react';
import TodoModel from '../models/todoModel';
import TodoItem from './TodoItem';

var Todos: React.FC<{ items: TodoModel[] }>;
Todos = function (props) {
    return <ul>
        {props.items.map(x =>

            <TodoItem key={x.id} text={x.text} />

        )}
    </ul>;
}



export default Todos;