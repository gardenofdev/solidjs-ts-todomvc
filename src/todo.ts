import { createEffect, createMemo } from "solid-js";
import { createStore } from "solid-js/store";
import type { Store, SetStoreFunction } from "solid-js/store"

const LOCAL_STORAGE_KEY = "todos-solid";

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean
}

export type State = TodoItem[]


function createLocalStore(value: TodoItem[] = [])
    : [get: Store<State>, set: SetStoreFunction<State>] {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)

    const [state, setState] = createStore<TodoItem[]>(
        stored ?
            JSON.parse(stored)
            : value
    )

    createEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    })
    return [state, setState]
}


export const [todos, setTodos] = createLocalStore()

export const removeTodo = (todoId: string) => setTodos(todos.filter(item => item.id !== todoId))

export const count = createMemo(() => todos.length)