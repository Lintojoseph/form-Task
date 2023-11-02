const initialState = {
    questions: [],
  };
  
  const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_QUESTIONS_SUCCESS':
        return {
          ...state,
          questions: action.payload,
        };
      // Add more cases for other actions if needed
      default:
        return state;
    }
  };
  
  export default questionReducer;
  