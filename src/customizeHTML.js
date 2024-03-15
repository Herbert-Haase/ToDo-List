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
function throwErrorHTML(text) {
  alert(text);
}

export {
  loadHTMLTodosAfterSwitching,
  loadHTMLProjectsAfterSwitching,
  showHtmlCurrentProject,
  deleteTodoHTML,
  throwErrorHTML,
};
