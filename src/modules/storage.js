
export let currentFile;

export const todos = [];

export const files = [];

class File {
    constructor (name) {
        this.name = name;
        this.todos = [];
    }

    getName = () => this.name;
    getTodos = () => this.todos;

    pushTodo(todo) {
        this.todos.push(todo);
    }
}

export function createFile (name) {
    files.push(new File(name));
}

export function createDefault () {
    const defaultF = new File("default");

    currentFile = defaultF;
}