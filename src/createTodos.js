
import {domInput} from "./dom.js";

export class Todo
{
    constructor(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export const createTodos = () => {
    
    const todo = new Todo(...domInput.getValues());

    todos.push()
}