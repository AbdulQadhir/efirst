import AsyncStorage from '@react-native-community/async-storage';
import {persistCombineReducers} from 'redux-persist';
const config = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['login', 'token'],
};
import {
  login,
  token,
  logout,
  registration,
  forgetpassword,
  confirmemail,
  extUserInfo,
  extRegistration,
  extLoginUrls,
  forgetchangepassword,
} from '../screens/auth/reducer';

import {applicationState} from '../screens/reducer';

import {
  profile,
  usercontactdetail,
  userofficeadress,
  userpersonaldetail,
  userprofile,
  changepassword,
} from '../screens/profile/reducer';
import {onesignal, onesignalInfo} from '../screens/onesignal/reducer';
const combinedReducers = {
  login,
  token,
  logout,
  registration,
  forgetpassword,
  confirmemail,
  extUserInfo,
  extRegistration,
  extLoginUrls,
  forgetchangepassword,
  profile,
  usercontactdetail,
  userofficeadress,
  userpersonaldetail,
  userprofile,
  changepassword,
  onesignal,
  onesignalInfo,
  applicationState,
};

export default persistCombineReducers(config, combinedReducers);
