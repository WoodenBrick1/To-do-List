import "./styles.css";
import {domHandler, domHandlerProjects} from "./modules/dom.js"
import {createDefault, loadStorage} from "./modules/storage.js"

window.addEventListener("DOMContentLoaded", () => {
   
 
    
  

    loadStorage();
    domHandlerProjects.loadProjects();
    domHandler.renderTodos(); 
    domHandler.loadCreateButton();
});
