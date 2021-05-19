const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        ...state,
        error: true,
        open: true,
        message: action.payload,
      };
    case 'ERROR_RESET':
      return {
        ...state,
        error: false,
        open: false,
      };

    case 'SET_SUBSCRIBE':
      return {
        ...state,
        message: action.payload,
        subscriber: true,
      };

    case 'LOG_OUT':
      return {
        ...state,
        message: action.payload,
        subscriber: false,
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
