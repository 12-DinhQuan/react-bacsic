
import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, UPDATE_TODO, UPDATE_INPUT } from './constans'

const initState = {
    todos: [],
    todoInput: '',
    editIndex: null
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case UPDATE_INPUT:
            return {
                ...state,
                editIndex: action.payload
            }
        case UPDATE_TODO:
            if( state.editIndex !== null) {
                state.todos[state.editIndex] = state.todoInput
                return {
                    ...state
                }
            }
        default:
            throw new Error(`Invalid action ${action.type}`)
    }
}

export { initState }
export default reducer