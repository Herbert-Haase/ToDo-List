const { formatDistance } = require("date-fns");
const { Project, ProjectToDo, Todo } = require("../src/todo.js");

describe("Project class", () => {
  it("should create a project with a default title if none is provided", () => {
    const project = new Project();
    expect(project.title).toBe("default");
  });

  it("should add a todo item to the project", () => {
    const project = new Project("Test Project");
    const todo = new Todo("Test Todo", "Test Description", "High", new Date());
    project.todo = todo;
    expect(project.todo).toContainEqual(todo);
  });

  // Add more tests for Project class functionality
});

// describe("ProjectToDo class", () => {
//   it("should expose todo properties correctly", () => {
//     const todo = new Todo("Test Todo", "Test Description", "High", new Date());
//     const exposedTodo = ProjectToDo.exposeTodo(todo);
//     expect(exposedTodo).toEqual({
//       title: "Test Todo",
//       duedate: expect.any(String),
//     });
//   });

it("should compare a todo's due date to today's date", () => {
  const date = new Date();
  const distance = ProjectToDo.compareDuedateToToday(date);
  expect(distance).toBe(formatDistance(new Date(), date));
});

// Add more tests for ProjectToDo class functionality

describe("Todo class", () => {
  it("should set and get the complete status of a todo", () => {
    const project = new Project("Test Project");
    const todo = new Todo("Test Todo", "Test Description", "High", new Date());
    project.todo = todo;
    todo.complete = true;
    expect(project.todo.length).toBe(0);
  });

  it("should set and get the due date of a todo", () => {
    const todo = new Todo("Test Todo", "Test Description", "High", new Date());
    todo.duedate = "2023-04-01";
    expect(todo.duedate).toBe(
      ProjectToDo.compareDuedateToToday(new Date("2023-04-01"))
    );
  });

  // Add more tests for Todo class functionality
});
