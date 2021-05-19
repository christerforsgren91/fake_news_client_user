const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case 'ERROR_RESET':
      return {
        ...state,
        error: false,
      };

    case 'SET_SUBSCRIBE':
      return {
        ...state,
        message: action.payload,
        subscriber: true,
      };
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.payload,
      };
    case 'SHOW_ARTICLE':
      return {
        ...state,
        article: action.payload,
      };

    case 'ERROR_RESET':
      return {
        ...state,
        error: false,
      };

    case 'SUCCESS_MESSAGE':
      return {
        ...state,
        popupSuccess: true,
      };

    default:
      return state;
  }
};

export default rootReducer;
