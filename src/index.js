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

// class buildHtmlProject {}

const buildHtmlTodo = (TITLE, DESCRIPTION, PRIORITY, DUEDATE) => {
  const priority = {
    no: "black",
    low: "grey",
    medium: "blue",
    high: "red",
  };
  const row = document.createElement("div");
  row.classList.add("row", "g-1", "mb-2");

  const colCheckbox = document.createElement("div");
  colCheckbox.classList.add("col-1", "d-flex", "justify-content-center");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.style.transform = "scale(1.5)";

  const title = document.createElement("div");
  title.classList.add("col-5", "border", "ps-1");
  title.setAttribute("data-bs-toggle", "collapse");
  title.setAttribute("data-bs-target", `#${TITLE}`);
  title.textContent = TITLE;
  title.style.color = priority[PRIORITY];

  const dueDate = document.createElement("div");
  dueDate.classList.add("col-5", "border", "ps-1");
  dueDate.setAttribute("data-bs-toggle", "collapse");
  dueDate.setAttribute("data-bs-target", `#${TITLE}`),
    (dueDate.textContent = DUEDATE);

  const colOption = document.createElement("div");
  colOption.classList.add("col-1");

  const option = document.createElement("i");
  option.style.opacity = "0.5";
  option.classList.add("fa-solid", "fa-gear", "ps-1");

  const description = document.createElement("div");
  description.setAttribute("id", TITLE);
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

document.querySelector(".saveTodo").addEventListener("click", () => {
  TodoCreator.saveTodo();
  buildHtmlTodo(
    ProjectManager.currentProject.todo.at(-1).title,
    ProjectManager.currentProject.todo.at(-1).description,
    ProjectManager.currentProject.todo.at(-1).priority,
    ProjectManager.currentProject.todo.at(-1).duedate
  );
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", Input.cleanInput);
