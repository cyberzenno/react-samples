class TodoModel {
    id: string;
    text: string;

    constructor(textTodo: string) {
        this.text = textTodo;
        this.id = Math.random().toString();
    }

}

export default TodoModel;