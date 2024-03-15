export class Input {
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
