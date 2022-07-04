import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import type { Store, SetStoreFunction } from "solid-js/store"

const LOCAL_STORAGE_KEY = "todos-solid";

export interface TodoItem {
    id: number;
    text: string;
    completed: boolean
}

export interface State {
    todos: TodoItem[]
}

export function getLocalStore(value: TodoItem[] = [])
    : [get: Store<State>, set: SetStoreFunction<State>] {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)

    const [state, setState] = createStore<State>(
        stored ?
            JSON.parse(stored)
            : { todos: value }
    )

    createEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    })
    return [state, setState]
}