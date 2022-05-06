import { User } from "./User";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
}


export async function fetchUserById(id: number): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
  return await res.json();
}
