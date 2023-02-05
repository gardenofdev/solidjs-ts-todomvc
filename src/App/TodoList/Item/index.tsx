import type { Component } from "solid-js";
import { todos, setTodos, TodoItem } from "../../../todo";

const Item: Component<{ todo: TodoItem }> = ({ todo }) => {
  const removeTodo = (todoId: string) =>
    setTodos(todos.filter((item) => item.id !== todoId));

  return (
    <li classList={{ completed: todo.completed }}>
      <div class="view">
        <input class="toggle" type="checkbox" checked={todo.completed} />
        <label>{todo.text}</label>
        <button class="destroy" onClick={[removeTodo, todo.id]}></button>
      </div>
    </li>
  );
};

export default Item;
