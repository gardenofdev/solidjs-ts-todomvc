import { Component, createSignal } from "solid-js";

import { setState } from "../../todo";
import { UUID } from "../../utils";

const NewInput: Component = () => {
  const onKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement;

    if (e.code === "Enter") {
      setState("todos", (prev) => [
        ...prev,
        { id: UUID(), text: target.value.trim(), completed: false },
      ]);

      target.value = "";
    }
  };

  return (
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeydown={onKeyDown}
      />
    </header>
  );
};

export default NewInput;
