import * as React from 'react';

var TodoItem: React.FC<{ text: string }>;
TodoItem = function (props) {
    return <li>{props.text}</li>;
}



export default TodoItem;