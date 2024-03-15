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

export { saveToLocalStorage, loadFromLocalStorage };
