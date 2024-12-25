
import {createTodos} from "./createTodos.js"
import {currentFile, files, setCurrent} from "./storage.js"




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
            
            currentFile.pushTodo(createTodos(domInput.getValues()));
            container.innerHTML = "";

            renderTodos();
            loadCreateButton();
            
        })
    }

    // Load the "Add Task" Button

    const loadCreateButton = () => {
        const createButton = document.createElement("button");

        createButton.id = "create-task";
        createButton.textContent = "Add Task";

        createButton.addEventListener("click", loadTodo);

        container.appendChild(createButton);
    }   




    const renderTodos = () => {
        
        container.innerHTML = ``;

        for (let todo of currentFile.getTodos()) {

            const button = document.createElement("button");

            button.classList.add("todo");

            button.classList.add(todo.getPriority().toLowerCase());


            const title = document.createElement("p");
            title.classList.add("title");
            title.textContent = todo.getTitle();

            const description = document.createElement("p");
            description.classList.add("description");
            description.textContent = todo.getDescription();

            const date = document.createElement("p");
            date.classList.add("date");
            date.textContent = todo.getDate();

            button.appendChild(title);
            button.appendChild(description);
            button.appendChild(date);

            button.addEventListener("click", () => {

                if (button.style.height != "100%") {
                    button.style.width = "90%";
                    button.style.height = "100%";

                    button.classList.add("extended")

                    description.style.display = "block";
                    date.style.display = "block";
                } 
                else {
                    button.style.width = "80%";
                    button.style.height = "80%";


                    description.style.display = "none";
                    date.style.display = "none";

                    button.classList.remove("extended")
                }
                
            })
        
            container.appendChild(button);
        }
    }



    
    return {
        loadTodo,
        loadCreateButton,
        renderTodos,
    }
})();



// Handle The Project files
export const domHandlerProjects = (function () {

    const loadProjects = () => {
        const fileContainer = document.getElementById("file-container");
        console.log(files);
        for (let project of files) {
            
            
            const projectButton = document.createElement("button");
            projectButton.classList.add("project");

            projectButton.textContent = project.getName();

            projectButton.addEventListener("click", () => {
                setCurrent(project);
                domHandler.renderTodos();
                domHandler.loadCreateButton();
            }) 
            fileContainer.appendChild(projectButton);
        }
    }

    return {
        loadProjects
    }
})();

