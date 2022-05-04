import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

type Props = {
  items: Todo[]
};

function TodosList({ items }: Props) {
  return (
    <div className="TodosList">
      {items.map((it) => <TodoItem key={it.id} item={it} />)}
    </div>
  );
}

export default TodosList;
