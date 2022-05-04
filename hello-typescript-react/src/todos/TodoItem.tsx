import { Todo } from "./Todo";

type Props = {
  item: Todo
};

function TodoItem({ item }: Props) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button>-</button>
    </div>
  );
}

export default TodoItem;
