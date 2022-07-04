import { Component, For } from "solid-js";
import { getLocalStore } from "../../todo";

import Item from "./Item";

const TodoList: Component = () => {
  const [state, setState] = getLocalStore();

  return (
    <section class="main" style="display: block;">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <For each={state.todos}>{(todo) => <Item todo={todo} />}</For>
      </ul>
    </section>
  );
};

export default TodoList;
