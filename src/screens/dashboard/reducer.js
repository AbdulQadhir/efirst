import {dashboardState, offerState} from './action';

const initialDashboard = {
  loading: false,
  data: null,
  success: false,
  error: null,
};

export const dashboard = (state = initialDashboard, action) => {
  switch (action.type) {
    case dashboardState.LOADING:
      return {...state, loading: action.state};
    case dashboardState.DONE:
      return {...state, data: action.state};
    case dashboardState.SUCCESS:
      return {...state, success: action.state};
    case dashboardState.ERROR:
      return {...state, error: action.state};
    default:
      return state;
  }
};

const initialOfferState = {
  Used : false
};
export const offer = (state = initialOfferState, action) => {
  switch (action.type) {
    case dashboardState.OFFER_USED:
      return {...state, Used: action.state};
    default:
      return state;
  }
};
