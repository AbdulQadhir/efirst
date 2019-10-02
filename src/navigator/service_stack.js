import React, {Component} from 'react';
import ServiceHome from '../pages/service_home';
import Attestation from '../pages/attestation';
import {createStackNavigator} from 'react-navigation-stack';
import {TouchableOpacity, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import IconsAws from 'react-native-vector-icons/FontAwesome';
import {calcHeight, calcWidth} from '../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
  hdrStyles,
} from '../pages/uicomponents/components';

export default DashboardStack = createStackNavigator(
  {
    ServiceHome,
    //  Attestation
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
      headerRight: <HeaderBtnProfile onPress={() => alert('Profile')} />,
    },
  },
);
