import { useLocation } from "solid-app-router";
import { Component, createMemo, For } from "solid-js";
import { TodoItem, todos } from "../../todo";

import Item from "./Item";

const TodoList: Component = () => {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  const filterTodos = (todos: readonly TodoItem[]) => {
    switch (pathname()) {
      case "/active":
        return todos.filter((todo) => !todo.completed);
      case "/completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <section class="main" style="display: block;">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <For each={filterTodos(todos)}>{(todo) => <Item todo={todo} />}</For>
      </ul>
    </section>
  );
};

export default TodoList;
