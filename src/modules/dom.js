
import { createTodos } from "./createTodos.js"

// Gets the values from the input
export const domInput = (function () {

    const getValues = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const date = document.getElementById("date").value;
        const property = document.getElementById("property").value;

        return [title, description, date, property]
    };


    return {
        getValues
    }
})();


// Renders the input boxes
export const domHandler = (function () {

    const container = document.getElementById("container");
    const loadTodo = () => {
        container.innerHTML += `
        
        <div id ="inputs">

            <section class="sec">
                <label for="title">Title</label>
                <input id="title"></input>
            </section>
            <section class="sec">
                <label for="description">Description</label>
                <input id="description"></input>
            </section>
            <section class="sec">
                <label for="date">Due Date</label>
                <input id="date" type="date"></input>
            </section>
            <section class="sec">
                <label for="property">Property</label>
                <select id="property">
                    <option value="Low" selected>Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </section>

            <button id="submit">Submit</button>
        </div>
        `
        setSubmit();
    }


    // Set the submit button to create the todo
    const setSubmit = () => {
        document.getElementById("submit").addEventListener("click", () => {
            createTodos(domInput.getValues());
            container.innerHTML = "";
            loadCreateButton();
        })
    }

    const loadCreateButton = () => {
        const createButton = document.createElement("button");

        createButton.id = "create-task";
        createButton.textContent = "Create Task";

        createButton.addEventListener("click", loadTodo);

        container.appendChild(createButton);
    }   



    return {
        loadTodo,
        loadCreateButton
    }
})();


