import { Component, For } from "solid-js";
import { todos } from "../../todo";

import Item from "./Item";

const TodoList: Component = () => {
  return (
    <section class="main" style="display: block;">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <For each={todos}>{(todo) => <Item todo={todo} />}</For>
      </ul>
    </section>
  );
};

export default TodoList;
