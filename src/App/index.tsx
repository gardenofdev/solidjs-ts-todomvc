import type { Component } from "solid-js";

import NewInput from "./NewInput";
import Copyright from "./Copyright";
import TodoList from "./TodoList";
import Filters from "./Filters";

const App: Component = () => {
  return (
    <>
      <section class="todoapp">
        <NewInput />
        <TodoList />
        <Filters />
      </section>
      <Copyright />
    </>
  );
};

export default App;
