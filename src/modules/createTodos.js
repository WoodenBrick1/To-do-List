import { currentFile } from "./storage";
import {isPast} from "../../node_modules/date-fns";


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
    getDate = () => this.dueDate;
    getPriority = () => this.priority;
}

export const createTodos = (values) => {
    
    return new Todo(...values);

}

export const checkInput = (values) => {
    const [title, description, date, property] = values;

    console.log(title);

    if (!title || !date) {
        return false;
    } else if (isPast(date)) {
        return false;
    }
    
    return true;
}

