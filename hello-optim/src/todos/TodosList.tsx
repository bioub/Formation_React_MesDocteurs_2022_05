import { memo } from "react";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

type Props = {
  items: Todo[];
  onDelete(t: Todo): void;
};

function TodosList({ items, onDelete }: Props) {
  console.log('TodosList');
  return (
    <div className="TodosList">
      {items.map((it) => <TodoItem key={it.id} item={it} onDelete={onDelete} />)}
    </div>
  );
}

export default memo(TodosList);
