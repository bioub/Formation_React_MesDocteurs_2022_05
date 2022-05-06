import { Todo } from "./Todo";

type Props = {
  item: Todo;
  onDelete(t: Todo): void;
};

function TodoItem({ item, onDelete }: Props) {
  console.log('TodoItem');
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button onClick={() => onDelete(item)}>-</button>
    </div>
  );
}

export default TodoItem;
