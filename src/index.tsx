import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoInterface } from "./interfaces";
import "./styles/styles.scss";

// TodoList App Component
const TodoListApp = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  // Create new todo item.
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  }

  // Update todo.
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
      event.target.value;
    setTodos(newTodosState);
  }

  // Remove todo.
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id,
    );
    setTodos(newTodosState);
  }

  // Completing todo.
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find(
      (todo: TodoInterface) =>
        (newTodosState.find(
          (todo: TodoInterface) => todo.id === id,
        )!.isCompleted = !newTodosState.find(
          (todo: TodoInterface) => todo.id === id,
        )!.isCompleted),
    );
    setTodos(newTodosState);
  }

  // Check todo has text.
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.value.length === 0
      ? event.target.classList.add("TodoItem__error")
      : event.target.classList.remove("TodoItem__error");
  }

  console.log(todos);
  return (
    <div className='Todo'>
      <h1 className='app-title'>@Todos</h1>
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />

      {todos.length > 0 && (
        <TodoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}
          handleTodoBlur={handleTodoBlur}
        />
      )}
    </div>
  );
};

ReactDOM.render(<TodoListApp />, document.getElementById("root"));
