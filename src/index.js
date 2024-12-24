import "./styles.css";
import {domHandler} from "./modules/dom.js"
import {createDefault} from "./modules/storage.js"

window.addEventListener("DOMContentLoaded", () => {
    domHandler.loadCreateButton();
    createDefault();

});
