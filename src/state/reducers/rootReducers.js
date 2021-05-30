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

    case 'AUTHENTICATE':
      return {
        ...state,
        message: action.payload,
        subscriber: true,
      };

    case 'LOG_OUT':
      return {
        ...state,
        message: action.payload,
        open: true,
        subscriber: false,
      };

    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.payload,
      };
    case 'SET_BACKYARD_ARTICLES':
      return {
        ...state,
        backyardArticles: action.payload.articles,
        location: action.payload.location,
      };
    case 'SHOW_ARTICLE':
      return {
        ...state,
        article: action.payload,
      };
    case 'SUCCESSFUL_RATING':
      return {
        ...state,
        successfulRating: true,
      };
    case 'SUCCESSFUL_COMMENT':
      return {
        ...state,
        successfullComment: true,
      };
    case 'SHOW_BACKYARD_ARTICLE':
      return {
        ...state,
        backyardArticle: action.payload,
      };
    case 'SUCCESS_MESSAGE':
      return {
        ...state,
        open: true,
        message: action.payload,
      };
    case 'UPDATE':
      return {
        ...state,
        update: !state.update,
      };
    case 'NO_BACKYARD_ARTICLES':
      return {
        ...state,
        error: true,
        open: true,
        message: action.payload.message,
        location: action.payload.location,
      };
    default:
      return state;
  }
};

export default rootReducer;
