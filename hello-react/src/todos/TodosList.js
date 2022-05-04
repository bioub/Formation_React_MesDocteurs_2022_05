import TodoItem from "./TodoItem";

function TodosList({ items }) {
  return (
    <div className="TodosList">
      {items.map((it) => <TodoItem key={it.id} item={it} />)}
    </div>
  );
}

export default TodosList;
