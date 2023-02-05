import { createEffect, createMemo } from "solid-js";
import { createStore } from "solid-js/store";
import type { Store, SetStoreFunction } from "solid-js/store"

const LOCAL_STORAGE_KEY = "todos-solid";

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean
}

export type State = {
    todos: TodoItem[]
}

function createLocalStore(value: State)
    : [get: Store<State>, set: SetStoreFunction<State>] {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)

    const [state, setState] = createStore<State>(
        stored ?
            JSON.parse(stored)
            : value
    )

    createEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    })
    return [state, setState]
}

export const [state, setState] = createLocalStore({ todos: [] })