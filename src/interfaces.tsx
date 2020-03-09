/**
 * Todo interface
 */
export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

/**
 * Todo Form interface
 */
export interface TodoFormInterface {
  handleTodoCreate: (todo: TodoInterface) => void;
  todos: TodoInterface[];
}

/**
 * Todo List interface
 */
export interface TodoListInterface {
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[];
}

/**
 * Todo Item interface
 */
export interface TodoItemInterface {
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
}
