import { SyntheticEvent } from "react";

type Props = {
  newTodo: string;
  onNewTodoChange(value: string): void;
  onAdd(): void;
};

function TodoForm({ newTodo, onNewTodoChange, onAdd }: Props) {
  console.log('TodoForm');

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    onAdd();
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(e) => onNewTodoChange(e.target.value)} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
