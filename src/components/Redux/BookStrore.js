import { createStore } from "redux";
import BookReducer from "./BookReducer";

const store=createStore(BookReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store