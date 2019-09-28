import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../pages/login";

const accountStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: "Login",
    swipeEnabled: false,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default accountStack;
