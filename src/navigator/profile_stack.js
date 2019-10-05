import React, {Component} from 'react';
//import ProfilePage from '../pages/profile';
import ProfilePage from '../screens/profile';
import {createStackNavigator} from 'react-navigation-stack';
import {navigation} from 'react-navigation';
import {HeaderBtnProfile, hdrStyles} from '../pages/uicomponents/components';

export default ProfileStack = createStackNavigator(
  {
    ProfilePage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
