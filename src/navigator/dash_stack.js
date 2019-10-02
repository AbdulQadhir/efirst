import React, {Component} from 'react';
import Dashboard from '../screens/dashboard';
import {createStackNavigator} from 'react-navigation-stack';
import {TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import IconsAws from 'react-native-vector-icons/FontAwesome';
import {calcHeight, calcWidth} from '../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {HeaderBtnMenu, HeaderBtnBack, HeaderBtnProfile, hdrStyles} from '../pages/uicomponents/components';

export default DashboardStack = createStackNavigator(
  {
    Dashboard,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
      headerRight: (
        <HeaderBtnProfile
          onPress={() => alert('Profile')} />
      ),
    },
  },
);
