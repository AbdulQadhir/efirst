import React, {Component} from 'react';
import MyRequests from '../screens/service/myrequests';
import SRDetails from '../pages/srdetails';
import {createStackNavigator} from 'react-navigation-stack';
import {
  hdrStyles,
} from '../pages/uicomponents/components';

export default MyRequestStack = createStackNavigator(
  {
    MyRequests: {screen: MyRequests},
    SRDetails: {screen: SRDetails},
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
