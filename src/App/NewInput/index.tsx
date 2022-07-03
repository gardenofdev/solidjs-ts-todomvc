import type { Component } from "solid-js";

const NewInput: Component = () => {
  return (
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
  );
};

export default NewInput;
