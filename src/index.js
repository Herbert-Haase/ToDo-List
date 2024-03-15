import { ProjectManager, Todo } from "./todo.js";
import "./style.css";
import { Input } from "./input.js";
import { buildHtmlProject, buildHtmlTodo } from "./buildHTML.js";
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage.js";
import {
  loadHTMLTodosAfterSwitching,
  loadHTMLProjectsAfterSwitching,
  showHtmlCurrentProject,
  deleteTodoHTML,
  throwErrorHTML,
  projectSwitchOnButtonPress,
} from "./customizeHTML.js";

// initializing projects and todos from localstorage
// or falling back to default project
const body = document.querySelector("body");
if (!body.hasAttribute("data-listener-added")) {
  if (localStorage.length > 0) {
    loadFromLocalStorage();
    ProjectManager.currentProject = Object.values(
      ProjectManager.getProjectList()
    )[0].title;
  } else {
    ProjectManager.createProject("default");
    ProjectManager.currentProject = "default";
  }
  showHtmlCurrentProject();
  projectSwitchOnButtonPress();
  loadHTMLProjectsAfterSwitching();
  loadHTMLTodosAfterSwitching();
}
body.setAttribute("data-listener-added", "");

const saveTodoButton = document.querySelector(".saveTodo");

// Button for creating new Todos
if (!saveTodoButton.hasAttribute("data-listener-added")) {
  saveTodoButton.addEventListener("click", () => {
    if (Input.getInputTodo().titleValue !== "") {
      const inputData = Object.values(Input.getInputTodo());
      ProjectManager.currentProject.todo = new Todo(...inputData);
      Input.cleanInput();
      buildHtmlTodo(
        ProjectManager.currentProject.todo.at(-1).title,
        ProjectManager.currentProject.todo.at(-1).description,
        ProjectManager.currentProject.todo.at(-1).priority,
        ProjectManager.currentProject.todo.at(-1).duedate
      );
      deleteTodoHTML(
        ProjectManager.currentProject,
        ProjectManager.currentProject.todo.at(-1)
      );
      saveToLocalStorage();
    } else {
      throwErrorHTML("Todo Name can not be empty");
    }
  });
  saveTodoButton.setAttribute("data-listener-added", "");
}

// Button for creating Projects
const saveProjectButton = document.querySelector(".saveProject");

if (!saveProjectButton.hasAttribute("data-listener-added")) {
  saveProjectButton.addEventListener("click", () => {
    if (Input.getInputProject() === "") {
      throwErrorHTML("Project Name can not be empty");
    } else if (!ProjectManager.checkForDoubles(Input.getInputProject())) {
      ProjectManager.createProject(Input.getInputProject());
      ProjectManager.currentProject = Input.getInputProject();
      showHtmlCurrentProject();
      buildHtmlProject(Input.getInputProject());
      projectSwitchOnButtonPress();
      Input.cleanInput();
      saveToLocalStorage();
    } else {
      throwErrorHTML("Project have to be unique!");
    }
  });
  saveProjectButton.setAttribute("data-listener-added", "");
}

document.querySelector(".cancel").addEventListener("click", Input.cleanInput);
