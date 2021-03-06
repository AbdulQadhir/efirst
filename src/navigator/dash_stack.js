import React, {Component} from 'react';
import Dashboard from '../screens/dashboard';
import {createStackNavigator} from 'react-navigation-stack';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
  hdrStyles,
} from '../pages/uicomponents/components';

export default DashboardStack = createStackNavigator(
  {
    Dashboard,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);