
import {domInput} from "./dom.js";
import {todos} from "./storage.js";

export class Todo
{
    constructor(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle = () => this.title;
    getDescription = () => this.description;
    getDate = () => this.date;
    getPriority = () => this.priority;
}

export const createTodos = (values) => {
    
    const todo = new Todo(...values);
    todos.push(todo);
    console.log(todo);
}