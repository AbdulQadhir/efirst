import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
//import Login from "../pages/login";
import Login from '../screens/auth/login';
import ConfirmEmail from '../screens/auth/confirmEmail';
import Register from '../screens/auth/registration';
import ForgetPassword from '../screens/auth/forgetPassword';
import ChangePassword from '../screens/auth/changePassword';
import RegisterExternal from '../screens/auth/externalRegister';
const accountStack = createStackNavigator(
  {
    Login,
    Register,
    ConfirmEmail,
    ForgetPassword,
    ChangePassword,
    RegisterExternal,
  },
  {
    initialRouteName: 'Login',
    swipeEnabled: false,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default accountStack;
