import React, {Component} from 'react';
import Support from '../pages/support';
import {createStackNavigator} from 'react-navigation-stack';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
  hdrStyles,
} from '../pages/uicomponents/components';

export default DashboardStack = createStackNavigator(
  {
    Support,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);