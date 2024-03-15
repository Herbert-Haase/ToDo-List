class Todo {
  constructor(title, description, priority, duedate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.duedate = duedate;
  }
}

class Project {
  constructor(title = "default") {
    this.title = title;
    this.#todo = [];
  }
  #todo;
  set todo(item) {
    this.#todo.push(item);
  }
  get todo() {
    return this.#todo;
  }
  removeTodo(todo) {
    let index = this.todo.findIndex((item) => {
      return item === todo;
    });
    if (index !== -1) {
      this.todo.splice(index, 1);
    }
  }
}

class ProjectManager {
  static #projectList = {};
  static checkForDoubles(input) {
    return this.#projectList[input] !== undefined;
  }
  static createProject = (title) => {
    if (!this.checkForDoubles(title) && title !== undefined) {
      this.#projectList[title] = new Project(title);
    }
  };
  static getProjectList = () => {
    return this.#projectList;
  };
  static #currentProject;
  static set currentProject(title) {
    this.#currentProject = this.#projectList[title];
  }
  static get currentProject() {
    return this.#currentProject;
  }
  static deleteProject = (title) => {
    delete this.#projectList[title];
  };
}

module.exports = {
  ProjectManager,
  Project,
  Todo,
};
