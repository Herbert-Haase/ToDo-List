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

function buildHtmlTodo(TITLE, DESCRIPTION, PRIORITY, DUEDATE) {
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
}

export { buildHtmlProject, buildHtmlTodo };
