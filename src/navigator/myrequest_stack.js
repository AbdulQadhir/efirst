import React, {Component} from 'react';
import MyRequests from '../screens/service/myrequests';
import ServiceDetail from '../screens/service/srdetails';
import {createStackNavigator} from 'react-navigation-stack';
import {hdrStyles} from '../pages/uicomponents/components';

export default MyRequestStack = createStackNavigator(
  {
    MyRequests: {screen: MyRequests},
    ServiceDetail: {screen: ServiceDetail},
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
