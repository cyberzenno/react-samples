import * as React from 'react';
import { useRef } from 'react';

var NewTodo: React.FC<{ onAddTodo: (text: string) => void }>

NewTodo = function (props) {

    var todoTextInputRef = useRef<HTMLInputElement>();

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        var enteredText = todoTextInputRef.current.value.trim();
        if (enteredText.length === 0) {
            alert("insert something")
            return;
        }

        props.onAddTodo(enteredText);
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>;
}

export default NewTodo;