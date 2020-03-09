import React from "react";
import { TodoItemInterface } from "../interfaces";

const TodoItem = (props: TodoItemInterface) => (
  <div className='TodoItem'>
    <div onClick={() => props.handleTodoComplete(props.todo.id)}>
      {props.todo.isCompleted ? (
        <span className='TodoItem__complete TodoItem__checked'>✔</span>
      ) : (
        <span className='TodoItem__complete TodoItem__unchecked' />
      )}
    </div>

    <input
      className={`TodoItem__input ${
        props.todo.isCompleted ? "TodoItem__input--complete" : ""
      }`}
      value={props.todo.text}
      onBlur={props.handleTodoBlur}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        props.handleTodoUpdate(event, props.todo.id)
      }
    />

    <div
      className='TodoItem__remove'
      onClick={() => props.handleTodoRemove(props.todo.id)}
    >
      &times;
    </div>
  </div>
);

export default TodoItem;
