import { Project, Todo } from "./todo.js";
import "./style.css";

class Input {
  static title = document.querySelector("#title");
  static titleTodo = document.querySelector("#titleTodo");
  static description = document.querySelector("#description");
  static duedate = document.querySelector("#duedate");
  static priority = document.querySelector("#priority");
  // static error = document.querySelector(".error");

  static cleanInput = () => {
    title.value = "";
    titleTodo.value = "";
    description.value = "";
    duedate.value = "";
    priority.value = "";
    // error.textContent = "";
  };

  static getInputTodo = () => {
    const titleValue = titleTodo.value;
    const descriptionValue = description.value;
    const duedateValue = duedate.value;
    const priorityValue = priority.value;

    return { titleValue, descriptionValue, priorityValue, duedateValue };
  };
  static getInputProject = () => {
    return title.value;
  };
}

// function showERROR(){
//     const ERROR = document.querySelector(".error");

//     save.createAttribute("disabled");
//     ERROR.textContent = "Duedate can not be in the past";
// }

class ProjectManager {
  static #projectList = {};
  static checkForDoubles(input) {
    return this.#projectList[`${input}`] !== undefined;
  }
  static createProject = (title) => {
    if (!this.checkForDoubles(title) && title !== undefined) {
      this.#projectList[`${title}`] = new Project(title);
    }
  };
  static getProjectList = () => {
    return this.#projectList;
  };
  static #currentProject;
  static set currentProject(title) {
    this.#currentProject = this.#projectList[`${title}`];
  }
  static get currentProject() {
    return this.#currentProject;
  }
  static deleteProject = (title) => {
    delete this.#projectList[`${title}`];
  };
}
class TodoCreator {
  static saveTodo() {
    const inputData = Object.values(Input.getInputTodo());

    Input.cleanInput();

    ProjectManager.currentProject.todo = new Todo(...inputData);
  }
}

// const title = document.querySelector("#title");
// title.addEventListener("blur",validateTitle);

// function validateTitle(){
//     if(TaskCreator.checkForDoubles(this.value)){
//         input.showERROR();
//         return;
//     }
//     document.querySelector(".save").removeAttribute("disabled");
// }

function buildHtmlProject(title) {
  const TITLEID = title.replaceAll(/[^a-zA-Z0-9]/g, "");
  const project = document.createElement("button");
  project.textContent = title;
  project.setAttribute("type", "button");
  project.setAttribute("id", `ID${TITLEID}`);
  project.classList.add("btn", "btn-secondary", "container", "project", "mb-1");

  document
    .querySelector(".sidebar")
    .insertBefore(project, document.querySelector("#createProject"));
}

const buildHtmlTodo = (TITLE, DESCRIPTION, PRIORITY, DUEDATE) => {
  const priority = {
    no: "black",
    low: "grey",
    medium: "blue",
    high: "red",
  };
  const TITLEID = TITLE.replaceAll(/[^a-zA-Z0-9]/g, "");
  const row = document.createElement("div");
  row.classList.add("row", "g-1", "mb-2", "todo");

  const colCheckbox = document.createElement("div");
  colCheckbox.classList.add("col-1", "d-flex", "justify-content-center");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("delete");
  checkbox.style.transform = "scale(1.5)";

  const title = document.createElement("div");
  title.classList.add("col-5", "border", "ps-1");
  title.setAttribute("data-bs-toggle", "collapse");
  title.setAttribute("data-bs-target", `#ID${TITLEID}`);
  title.textContent = TITLE;
  title.style.color = priority[PRIORITY];

  const dueDate = document.createElement("div");
  dueDate.classList.add("col-5", "border", "ps-1");
  dueDate.setAttribute("data-bs-toggle", "collapse");
  dueDate.setAttribute("data-bs-target", `#ID${TITLEID}`),
    (dueDate.textContent = DUEDATE);

  const colOption = document.createElement("div");
  colOption.classList.add("col-1");

  const option = document.createElement("i");
  option.style.opacity = "0.5";
  option.classList.add("fa-solid", "fa-gear", "ps-1");

  const description = document.createElement("div");
  description.setAttribute("id", `ID${TITLEID}`);
  description.classList.add("border", "collapse");
  description.textContent = DESCRIPTION;

  const content = document.querySelector(".content");
  const createTodo = document.querySelector("#createTodo");

  row.appendChild(colCheckbox);
  row.appendChild(title);
  row.appendChild(dueDate);
  row.appendChild(colOption);
  row.appendChild(description);

  colCheckbox.appendChild(checkbox);
  colOption.appendChild(option);

  content.insertBefore(row, createTodo);
};

ProjectManager.createProject("default");
ProjectManager.currentProject = "default";
showHtmlCurrentProject();

const saveTodoButton = document.querySelector(".saveTodo");

if (!saveTodoButton.hasAttribute("data-listener-added")) {
  saveTodoButton.addEventListener("click", () => {
    if (Input.getInputTodo().titleValue !== "") {
      TodoCreator.saveTodo();
      buildHtmlTodo(
        ProjectManager.currentProject.todo.at(-1).title,
        ProjectManager.currentProject.todo.at(-1).description,
        ProjectManager.currentProject.todo.at(-1).priority,
        ProjectManager.currentProject.todo.at(-1).duedate
      );
      deleteTodoHTML(ProjectManager.currentProject.todo.at(-1));
    } else {
      throwErrorHTML("Todo Name can not be empty");
    }
  });
  saveTodoButton.setAttribute("data-listener-added", "");
}

const saveProjectButton = document.querySelector(".saveProject");

if (!saveProjectButton.hasAttribute("data-listener-added")) {
  saveProjectButton.addEventListener("click", () => {
    if (Input.getInputProject() === "") {
      throwErrorHTML("Project Name can not be empty");
    } else if (!ProjectManager.checkForDoubles(Input.getInputProject())) {
      ProjectManager.createProject(Input.getInputProject());
      ProjectManager.currentProject = Input.getInputProject();
      buildHtmlProject(Input.getInputProject());
      projectSwitch();
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

document.querySelector(".cancel").addEventListener("click", Input.cleanInput);
function projectSwitch() {
  const projectElements = document.querySelectorAll(".project");

  projectElements.forEach((projectElement) => {
    if (!projectElement.hasAttribute("data-listener-added")) {
      projectElement.addEventListener("click", (e) => {
        ProjectManager.currentProject = e.target.textContent.trim();
        showHtmlCurrentProject();
        loadHTMLTodosAfterSwitching();
      });
      projectElement.setAttribute("data-listener-added", "");
    }
  });
}

function loadHTMLTodosAfterSwitching() {
  document.querySelectorAll(".todo").forEach((todo) => todo.remove());
  ProjectManager.currentProject.todo.map((todo) => {
    buildHtmlTodo(todo.title, todo.description, todo.priority, todo.duedate);
    deleteTodoHTML(todo);
  });
}

function showHtmlCurrentProject() {
  document.querySelector("#currentProject").textContent =
    ProjectManager.currentProject.title;
}

function deleteTodoHTML(todo) {
  document.querySelectorAll(".delete").forEach((checkbox) => {
    if (!checkbox.hasAttribute("data-listener-added")) {
      checkbox.addEventListener("input", () => {
        console.log(todo);
        todo.complete = true;
        loadHTMLTodosAfterSwitching();
      });
    }
    checkbox.setAttribute("data-listener-added", "");
  });
}

function saveToLocalStorage() {
  Object.values(ProjectManager.getProjectList()).map((project) => {
    localStorage.setItem(`${project.title}`, JSON.stringify(project.todo));
  });
}

function loadFromLocalStorage() {
  Object.values(localStorage).map((todoString) => {
    const todo = JSON.parse(todoString);
    ProjectManager.createProject(todo.project.title);
    const todoObject = new Todo(
      todo.title,
      todo.description,
      todo.priority,
      todo.duedate
    );
    Project.getProjectList()[todo.project.title].todo = todoObject;
  });
}

// const obj = [
//   { name: "John", age: 30, city: "New York" },
//   { name: "John", age: 30, city: "New York" },
// ];
// const myJSON = JSON.stringify(obj);
// localStorage.setItem("test", myJSON);
