import { Todo } from "./Todo";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos.slice(0, 10);
}
