const initialState = { todos: [], filteredTodos:[{ "userId": 0,
        "id": 0,
        "title": "",
        "completed": false}],loading: false };

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, todos: action.payload, loading: false };
    case "SELECT_USERID":
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) => todo.userId == action.payload),
      };
      case "CHECKED": const checkedTodos=state.filteredTodos.map((todo) =>todo===action.payload?{...todo,completed:!todo.completed}:todo)
                return {...state,filteredTodos:checkedTodos}
      case 'DELETE': return{...state,filteredTodos:state.filteredTodos.filter(todo=>todo.userId==action.payload.userId&&todo.id!==action.payload.id)}
    
    default:
      return state;
  }
};
export default TodoReducer;
