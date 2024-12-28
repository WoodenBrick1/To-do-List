import { currentFile, files } from "./storage";
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


export const sortTodos = () => {
    currentFile.getTodos().sort((a, b) => {
        if (a.getPriority() == "Low" && b.getPriority() == "Medium"
            || a.getPriority() == "Medium" && b.getPriority() == "High") {
            return 1;
        } else if (a.getPriority() == b.getPriority()) {
            return 0;
        } else {
            return -1;
        }
    })
}   