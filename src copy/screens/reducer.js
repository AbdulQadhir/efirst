const defaultApplicationState = {
  error: false,
  success: false,
};
export const applicationState = (state = defaultApplicationState, action) => {
  switch (action.type) {
    case 'APPLICATION_STATE_ERROR':
      return {...state, error: true};
    case 'APPLICATION_STATE_SUCCESS':
      return {...state, success: true};
    case 'APPLICATION_STATE_RESET':
      return {error: false, success: false};
    default:
      return state;
  }
};
