// const { formatDistance } = require("date-fns");

const { ProjectManager, Project, Todo } = require("../src/todo.js");

describe("Todo class", () => {
  it("should create a new Todo instance with the given parameters", () => {
    const todo = new Todo(
      "Test Todo",
      "This is a test todo",
      "High",
      "2023-12-31"
    );
    expect(todo.title).toBe("Test Todo");
    expect(todo.description).toBe("This is a test todo");
    expect(todo.priority).toBe("High");
    expect(todo.duedate).toBe("2023-12-31");
  });
});

describe("Project class", () => {
  it("should create a new Project instance with the given title", () => {
    const project = new Project("Test Project");
    expect(project.title).toBe("Test Project");
    expect(project.todo).toEqual([]);
  });

  it("should add a todo to the project", () => {
    const project = new Project("Test Project");
    const todo = new Todo(
      "Test Todo",
      "This is a test todo",
      "High",
      "2023-12-31"
    );
    project.todo = todo;
    expect(project.todo).toContain(todo);
  });

  it("should remove a todo from the project", () => {
    const project = new Project("Test Project");
    const todo = new Todo(
      "Test Todo",
      "This is a test todo",
      "High",
      "2023-12-31"
    );
    project.todo = todo;
    project.removeTodo(todo);
    expect(project.todo).not.toContain(todo);
  });
});

describe("ProjectManager class", () => {
  it("should create a new project and add it to the project list", () => {
    ProjectManager.createProject("Test Project");
    expect(ProjectManager.getProjectList()).toHaveProperty("Test Project");
  });

  it("should not create a project if the title already exists", () => {
    ProjectManager.createProject("Test Project");
    ProjectManager.createProject("Test Project");
    expect(Object.keys(ProjectManager.getProjectList()).length).toBe(1);
  });

  it("should set the current project", () => {
    ProjectManager.createProject("Test Project");
    ProjectManager.currentProject = "Test Project";
    expect(ProjectManager.currentProject).toBeDefined();
    expect(ProjectManager.currentProject.title).toBe("Test Project");
  });

  it("should delete a project from the project list", () => {
    ProjectManager.createProject("Test Project");
    ProjectManager.deleteProject("Test Project");
    expect(ProjectManager.getProjectList()).not.toHaveProperty("Test Project");
  });
});
