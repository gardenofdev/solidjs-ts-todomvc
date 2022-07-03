import type { Component } from "solid-js";

import { NavLink } from "solid-app-router";

const Filters: Component = () => {
  return (
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
  );
};

export default Filters;
