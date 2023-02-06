import { Component, Show } from "solid-js";
import { state, setState, TodoItem } from "../../../todo";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      setFocus: boolean;
    }
  }
}

const Item: Component<{ todo: TodoItem }> = ({ todo }) => {
  const setFocus = (el: HTMLInputElement) => {
    setTimeout(() => el.focus(), 0);
  };

  const removeTodo = (todoId: string) =>
    setState("todos", (t) => t.filter((item) => item.id !== todoId));

  const toggle = (id: string, { target }: Event) => {
    setState(
      "todos",
      (item) => item.id === id,
      "completed",
      (target as HTMLInputElement)?.checked
    );
  };

  const setEditing = (id: string = "") => {
    setState("editingId", id);
  };

  const save = (id: string, event: Event) => {
    const target = event.target as HTMLInputElement;
    setState("todos", (item) => item.id === id, "text", target.value);

    setEditing();
  };

  const doneEditing = (id: string, event: Event) => {
    if ((event as KeyboardEvent).code === "Enter") {
      save(id, event);
    }
  };

  return (
    <li
      classList={{
        completed: todo.completed,
        editing: state.editingId === todo.id,
      }}
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          checked={todo.completed}
          onInput={[toggle, todo.id]}
        />
        <label onDblClick={[setEditing, todo.id]}>{todo.text}</label>
        <button class="destroy" onClick={[removeTodo, todo.id]}></button>
      </div>
      <Show when={state.editingId === todo.id}>
        <input
          class="edit"
          value={todo.text}
          onFocusOut={[save, todo.id]}
          onKeyDown={[doneEditing, todo.id]}
          use:setFocus
        />
      </Show>
    </li>
  );
};

export default Item;
