import {combineReducers, createStore, legacy_createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";


const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer) // createStore === legacy_createStore
export const store = legacy_createStore(rootReducer)


// @ts-ignore
window.store = store