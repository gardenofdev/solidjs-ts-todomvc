import type { Component } from "solid-js";

const TodoItem: Component = () => {
  return (
    <li data-id="1655628735268" class="">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>todo</label>
        <button class="destroy"></button>
      </div>
    </li>
  );
};

export default TodoItem;
