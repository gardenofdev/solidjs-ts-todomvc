import type { Component } from "solid-js";

import TodoItem from "./TodoItem";

const TodoList: Component = () => {
  return (
    <section class="main" style="display: block;">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <TodoItem />
      </ul>
    </section>
  );
};

export default TodoList;
