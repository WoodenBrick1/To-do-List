import { currentFile } from "./storage";


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
    
    return new Todo(...values);

}

