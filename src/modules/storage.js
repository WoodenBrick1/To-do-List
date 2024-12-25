
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
    const file = new File(name);
    files.push(file);
    return file;
}

export function createDefault () {

    setCurrent(createFile("default"))

    createFile("Test");
}

export const setCurrent = (file) => {
    currentFile = file;
}