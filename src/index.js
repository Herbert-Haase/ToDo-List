import { ProjectManager, Todo } from "./todo.js";
import "./style.css";
import { Input } from "./input.js";
import { buildHtmlProject, buildHtmlTodo } from "./buildHTML.js";

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

function throwErrorHTML(text) {
  alert(text);
}

// Switch Projects on Buttonpress
document.querySelector(".cancel").addEventListener("click", Input.cleanInput);
function projectSwitchOnButtonPress() {
  const projectElements = document.querySelectorAll(".project");

  projectElements.forEach((projectElement) => {
    if (!projectElement.hasAttribute("data-listener-added")) {
      projectElement.addEventListener("click", (e) => {
        ProjectManager.currentProject = e.target.getAttribute("id").slice(2);
        showHtmlCurrentProject();
        loadHTMLTodosAfterSwitching();
        e.stopPropagation();
      });
      projectElement.setAttribute("data-listener-added", "");
    }
  });
}

function loadHTMLTodosAfterSwitching() {
  document.querySelectorAll(".todo").forEach((todoHTML) => todoHTML.remove());
  ProjectManager.currentProject.todo.map((todo) => {
    buildHtmlTodo(todo.title, todo.description, todo.priority, todo.duedate);
    deleteTodoHTML(ProjectManager.currentProject, todo);
  });
}
function loadHTMLProjectsAfterSwitching() {
  document
    .querySelectorAll(".project")
    .forEach((projectHTML) => projectHTML.remove());
  Object.values(ProjectManager.getProjectList()).map((project) => {
    buildHtmlProject(project.title);
    projectSwitchOnButtonPress();
  });
}

function showHtmlCurrentProject() {
  document.querySelector("#currentProject").textContent =
    ProjectManager.currentProject.title;
}

function deleteTodoHTML(project, todo) {
  document.querySelectorAll(".delete").forEach((checkbox) => {
    if (!checkbox.hasAttribute("data-listener-added")) {
      checkbox.addEventListener("input", () => {
        project.removeTodo(todo);
        loadHTMLTodosAfterSwitching();
        saveToLocalStorage();
      });
    }
    checkbox.setAttribute("data-listener-added", "");
  });
}

function saveToLocalStorage() {
  Object.values(ProjectManager.getProjectList()).map((project) => {
    localStorage.removeItem(`${project.title}`);
    localStorage.setItem(`${project.title}`, JSON.stringify(project.todo));
    console.log(project.todo);
  });
}
function loadFromLocalStorage() {
  try {
    Object.keys(localStorage).forEach((project) => {
      const todos = JSON.parse(localStorage.getItem(project));
      ProjectManager.createProject(project);
      todos.forEach((todo) => {
        if (!todo.title) return; // Skip if title is undefined
        const todoObject = new Todo(
          todo.title,
          todo.description,
          todo.priority,
          todo.duedate
        );
        ProjectManager.getProjectList()[project].todo = todoObject;
      });
    });
  } catch (e) {
    console.error(e, "Error loading projects from local storage");
  }
}
