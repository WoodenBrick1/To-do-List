import {createTodos} from "./createTodos";
export let currentFile;

export const todos = [];

export let files = [];

class File {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getName = () => this.name;
    getTodos = () => this.todos;

    pushTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }
}

export function createFile(name) {
    const file = new File(name);
    files.push(file);
    setCurrent(file);
    return file;
}

export function createDefault() {

    setCurrent(createFile("default"))
}

export function setCurrent(file) {
    currentFile = file;
}

export function saveStorage() {
    localStorage.setItem("files", JSON.stringify(files));
}

export function loadStorage() {
    if (!localStorage.getItem("files")) {
        createDefault();
        saveStorage();
    } else {

        // if there is stuff to load, recreate all the todos and files

        const saved = localStorage.getItem("files");
        const parsed = JSON.parse(saved);
    
        parsed.forEach(file => createFile(file.name))

        files.forEach((file, index) => {
                for (const todo of parsed[index].todos) {
                    file.pushTodo(createTodos([todo.title, todo.description, todo.dueDate, todo.priority]));
                }
            })
        
        setCurrent(files[0]);
    }
}

export function deleteFile(file) {
    
    files.splice(files.indexOf(file), 1);
}   