
import {createTodos} from "./createTodos.js"
import {currentFile, files, setCurrent, saveStorage, createFile} from "./storage.js"




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
            saveStorage();
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


            // Create the button properties

            const title = document.createElement("p");
            title.classList.add("title");
            title.textContent = todo.getTitle();

            const description = document.createElement("p");
            description.classList.add("description");
            description.textContent = todo.getDescription();

            const descriptionTitle = document.createElement("p");
            descriptionTitle.classList.add("descriptionTitle");
            descriptionTitle.textContent = "Description: ";
            
            const date = document.createElement("p");
            date.classList.add("date");
            date.textContent = todo.getDate();

            const dateTitle = document.createElement("dateTitle");
            dateTitle.classList.add("dateTitle");
            dateTitle.textContent = "Due Date:";

            button.appendChild(title);
            button.appendChild(description);
            button.appendChild(date);
            button.appendChild(descriptionTitle);
            button.appendChild(dateTitle);

            button.addEventListener("click", () => {

                if (button.style.height != "100%") {
                    button.style.width = "90%";
                    button.style.height = "100%";

                    button.classList.add("extended")

                    description.style.display = "block";
                    date.style.display = "block";
                    dateTitle.style.display = "block";
                    descriptionTitle.style.display = "block";
                } 
                else {
                    button.style.width = "80%";
                    button.style.height = "80%";


                    description.style.display = "none";
                    date.style.display = "none";
                    dateTitle.style.display = "none";
                    descriptionTitle.style.display = "none";

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

    const fileContainer = document.getElementById("file-container");
    const loadProjects = () => {
        fileContainer.innerHTML = `<p id="projects-title">Projects</p>`;
        

        const projects = document.createElement("div");
        projects.id = "projects";
        for (let project of files) {
            
            
            const projectButton = document.createElement("button");
            projectButton.classList.add("project");

            projectButton.textContent = project.getName();

            projectButton.addEventListener("click", () => {
                setCurrent(project);
                domHandler.renderTodos();
                domHandler.loadCreateButton();
            }) 

          
            projects.appendChild(projectButton);
           
            
        }
        fileContainer.appendChild(projects);
        loadCreateFileButton();

    }

    const loadCreateFileButton = () => {
        const create = document.createElement("button");
        create.id = "create-file";
        create.textContent = "+";

        create.addEventListener("click", () => {
            createFile("TEST");
            loadProjects();
            saveStorage();
        }) 
        fileContainer.appendChild(create);

    }
    return {
        loadProjects,
        loadCreateFileButton
    }
})();

