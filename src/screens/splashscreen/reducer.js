<<<<<<< HEAD
import {statusBarState} from './action';
const initialDashboard = {
  statusBar: true,
=======
import { statusBarState } from "./action";
const initialDashboard = {
  statusBar: true
>>>>>>> a0b70c492802e7ab2fd319bdd3576dbda69c810b
};
export const statusBar = (state = initialDashboard, action) => {
  switch (action.type) {
    case statusBarState.SET:
<<<<<<< HEAD
      return {...state, statusBar: action.state};
=======
      return { ...state, statusBar: action.state };
>>>>>>> a0b70c492802e7ab2fd319bdd3576dbda69c810b

    default:
      return state;
  }
};
