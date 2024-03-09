import { formatDistance } from "date-fns";
// const { formatDistance } = require("date-fns");

class Project {
  constructor(title = "default") {
    this.title = title;
    this.#todo = [];
  }
  #todo;
  set todo(item) {
    item.project = this;
    item.removeTodo = ProjectToDo.removeTodo.bind(item);
    this.#todo.push(item);
  }
  get todo() {
    return this.#todo;
  }
}

class ProjectToDo {
  // static exposeTodo = (todo) => ({ title: todo.title, duedate: todo.duedate });
  static removeTodo() {
    let index = this.project.todo.findIndex((item) => {
      return item === this;
    });
    if (index !== -1) {
      this.project.todo.splice(index, 1);
    }
  }
  static compareDuedateToToday(date) {
    const now = new Date();
    return formatDistance(now, date);
  }
}

class Todo {
  constructor(title, description, priority, duedate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.duedate = duedate;
    this.#complete;
  }
  #complete;
  #duedate;
  set complete(bool) {
    if (bool && this.project !== undefined) {
      this.removeTodo();
    }
  }
  get complete() {
    return this.#complete;
  }
  set duedate(date) {
    this.#duedate = ProjectToDo.compareDuedateToToday(new Date(date));
  }
  get duedate() {
    return this.#duedate;
  }
}

export { Project, ProjectToDo, Todo };

// module.exports = {
//   Project,
//   ProjectToDo,
//   Todo,
// };
