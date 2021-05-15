const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        ...state,
        error: true,
        message: action.payload,
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
        }

    default:
      return state;
  }
};

export default rootReducer;
