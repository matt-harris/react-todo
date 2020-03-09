import React from "react";
import TodoItem from "./TodoItem";
import { TodoListInterface } from "../interfaces";

const TodoList = (props: TodoListInterface) => (
  <ul className='TodoList'>
    {props.todos.map(todo => (
      <li className='TodoList__item' key={todo.id}>
        <TodoItem
          todo={todo}
          handleTodoUpdate={props.handleTodoUpdate}
          handleTodoRemove={props.handleTodoRemove}
          handleTodoComplete={props.handleTodoComplete}
          handleTodoBlur={props.handleTodoBlur}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
