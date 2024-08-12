import { legacy_createStore } from "redux";
import TodoReducer from "./TodoReducer";


export const todoStore=legacy_createStore(TodoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())