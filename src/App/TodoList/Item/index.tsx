import type { Component } from "solid-js";
import { state, setState, TodoItem } from "../../../todo";

const Item: Component<{ todo: TodoItem }> = ({ todo }) => {
  const removeTodo = (todoId: string) =>
    setState("todos", (t) => t.filter((item) => item.id !== todoId));

  const toggle = (id: string, { target }: Event) => {
    setState(
      "todos",
      (item) => item.id === id,
      "completed",
      (target as HTMLInputElement)?.checked
    );
  };

  return (
    <li classList={{ completed: todo.completed }}>
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          checked={todo.completed}
          onInput={[toggle, todo.id]}
        />
        <label>{todo.text}</label>
        <button class="destroy" onClick={[removeTodo, todo.id]}></button>
      </div>
    </li>
  );
};

export default Item;
