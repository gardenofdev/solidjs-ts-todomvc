import type { Component } from "solid-js";

import { removeTodo, TodoItem } from "../../../todo";

const Item: Component<{ todo: TodoItem }> = ({ todo }) => {
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
