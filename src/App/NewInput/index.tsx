import { Component, createSignal } from "solid-js";

import { setTodos } from "../../todo";
import { UUID } from "../../utils";

const NewInput: Component = () => {
  const [newText, setNewText] = createSignal("");

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      setTodos((prev) => [
        ...prev,
        { id: UUID(), text: newText(), completed: false },
      ]);
    }
  };

  return (
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        value={newText()}
        onInput={(e) => setNewText(e.currentTarget.value)}
        onkeydown={onKeyDown}
      />
    </header>
  );
};

export default NewInput;
