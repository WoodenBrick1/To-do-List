
import {createTodos} from "./createTodos.js"

export const domInput = (function (){
    
    const getValues = () => {
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const date = document.getElementById("date");
        const property = document.getElementById("property");

        return [title, description, date, property]
    };


    return {
        getValues
    }
})();

export const domHandler = (function () {

    const loadTodo = () => {
        const container = document.getElementById("container");

        container.innerHTML = `
        <input id="title"></input>
        <input id="description"></input>
        <input id="date"></input>
        <input id="property"></input>

        <button id="submit">Submit</button>
                    
        `
        setButton();
    }


   const setButton = () => {
    document.getElementById("submit").addEventListener("click", createTodos)
   }

    
    return {
        loadTodo
    }
})();