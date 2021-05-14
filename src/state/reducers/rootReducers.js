const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        ...state,
        error: true,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
