import React, { useRef, useState } from "react";
import shortid from "shortid";
import { TodoInterface, TodoFormInterface } from "../interfaces";

const TodoForm = (props: TodoFormInterface) => {
  // Create ref for form input
  const inputRef = useRef<HTMLInputElement>(null);
  // Create form state
  const [formState, setFormState] = useState("");

  // Handle todo input change
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update form state with input text.
    setFormState(event.target.value);
  }

  // Handle 'Enter' key press to add todo.
  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      // Prep new todo object.
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false,
      };

      // Create new todo item
      props.handleTodoCreate(newTodo);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <div className='TodoForm'>
      <input
        className='TodoForm__input'
        ref={inputRef}
        type='text'
        placeholder='Enter a new todo'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;
