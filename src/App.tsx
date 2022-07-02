import type { Component } from "solid-js";
import { NavLink } from "solid-app-router";

const App: Component = () => {
  return (
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <section class="main" style="display: block;">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li data-id="1655628735268" class="">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>todo</label>
              <button class="destroy"></button>
            </div>
          </li>
          <li data-id="1655628738641" class="completed">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>done</label>
              <button class="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
      <footer class="footer" style="display: block;">
        <span class="todo-count">
          <strong>1</strong> item left
        </span>
        <ul class="filters">
          <li>
            <NavLink href="/" end activeClass="selected">
              All
            </NavLink>
          </li>
          <li>
            <NavLink href="/active" end activeClass="selected">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink href="/completed" end activeClass="selected">
              Completed
            </NavLink>
          </li>
        </ul>
        <button class="clear-completed" style="display: block;">
          Clear completed
        </button>
      </footer>
    </section>
  );
};

export default App;
