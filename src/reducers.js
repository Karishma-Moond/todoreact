const initialState = {
    tasks: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: action.id,
              text: action.text
            }
          ]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.id)
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;