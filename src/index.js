import "./styles.css";
import {domHandler, domHandlerProjects} from "./modules/dom.js"
import {createDefault} from "./modules/storage.js"

window.addEventListener("DOMContentLoaded", () => {
    domHandler.loadCreateButton();
    
    createDefault();
    domHandlerProjects.loadProjects();


});
