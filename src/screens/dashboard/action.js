import {DASHBOARD_DATA_URL, OFFER_ADD_URL, OFFER_CHK_URL} from '../../constants';
export const dashboardState = {
  LOADING: 'DASHBOARD_LOADING',
  SUCCESS: 'DASHBOARD_SUCCESS',
  ERROR: 'DASHBOARD_ERROR',
  DONE: 'DASHBOARD_DONE',
};

export const offerState = {
  USED: 'USED',
};

export const checkResult = (result, dispatch, setError) => {
  if (result.status) {
    return true;
  }
  dispatch(setError(JSON.stringify(result.data)));
  dispatch({type: 'APPLICATION_STATE_ERROR'});
  return false;
};

export const setInStore = (state, type) => ({
  type,
  state,
});
const Fetcher = async (fetchData, type, dispatch) => {
  dispatch(setInStore(true, type.LOADING));
  dispatch(setInStore(false, type.SUCCESS));
  dispatch(setInStore(null, type.ERROR));
  try {
    const result = await fetchData();
    if (checkResult(result, dispatch, error => setInStore(error, type.ERROR))) {
      dispatch(setInStore(result.data, type.DONE));
      dispatch(setInStore(true, type.SUCCESS));
      dispatch({type: 'APPLICATION_STATE_SUCCESS'});
    } else {
      dispatch(setInStore(false, type.SUCCESS));
    }
  } catch (error) {
    dispatch(setInStore(false, type.SUCCESS));
    dispatch(setInStore(error, type.ERROR));
    dispatch({type: 'APPLICATION_STATE_ERROR'});
  }
  dispatch(setInStore(false, type.LOADING));
};
export const DashboardData = token => dispatch => {
  return Fetcher(
    async () => {
      const result = await fetch(DASHBOARD_DATA_URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok,
      }));
    },
    dashboardState,
    dispatch,
  );
};

export const setOfferUsed = payload => dispatch =>  {
  dispatch(setInStore(true, offerState.USED));
}

export const setOfferNotUsed = payload => dispatch =>  {
  dispatch(setInStore(false, offerState.USED));
}

export const offerAddDevice = payload => dispatch => {
    async () => {
      const result = await fetch(`${OFFER_ADD_URL}?email=${payload.email}&device=${payload.device}`);
      dispatch(setInStore(true, offerState.USED));
    }
};

export const chkOffer = payload => dispatch => {
  async () => {
    try {
      let response = await fetch(
        `${OFFER_CHK_URL}?email=ddd&device=33`,
      );
      let responseJson = await response.json();
      alert(JSON.stringify(responseJson));
      console.log("OfferState=>"+JSON.stringify(data.result));
      if(responseJson.result)
        dispatch(setInStore(false, type.USED));
      else
        dispatch(setInStore(true, type.USED));
    } catch (error) {
      alert(error);
    }
  }
};
