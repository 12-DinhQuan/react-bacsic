import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, UPDATE_TODO, UPDATE_INPUT } from './constans'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
})

export const updateInput = payload => ({
    type: UPDATE_INPUT,
    payload
})

export const updateTodo_agin = () => ({
    type: UPDATE_TODO
})