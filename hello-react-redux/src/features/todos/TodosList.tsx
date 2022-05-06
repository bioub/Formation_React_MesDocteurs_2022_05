import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

type Props = {
  items: Todo[];
  onDelete(t: Todo): void;
};

function TodosList({ items, onDelete }: Props) {
  return (
    <div className="TodosList">
      {items.map((it) => <TodoItem key={it.id} item={it} onDelete={onDelete} />)}
    </div>
  );
}

export default TodosList;
