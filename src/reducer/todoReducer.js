const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'UPDATE_COMPLETED_TODO': {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload.id
          ? {...todo, completed: action.payload.completed}
          : todo
      );
      return updatedTodos;
    }
    case 'EDIT_INFO_TODO': {
      const {id, task, description, deadline} = action.payload;
      const updatedTodos = state.map((todo) =>
        todo.id === id ? {...todo, task, description, deadline} : todo
      );
      return updatedTodos;
    }
    case 'DELETE_TODO': {
      const updatedTodos = state.filter(
        (todo) => todo.id !== action.payload.id
      );
      return updatedTodos;
    }
    default:
      return state;
  }
};

export default todosReducer;
