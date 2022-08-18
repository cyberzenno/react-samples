import * as React from 'react';

var Todos: React.FC<{ items: string[] }>;
Todos = function (props) {
    return <ul>
        {props.items.map(x =>

            <li>{x}</li>

        )}
    </ul>;
}



export default Todos;