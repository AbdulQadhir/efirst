import React, {Component} from 'react';
import {View} from 'react-native';
import ServiceHome from '../pages/service_home';
import Attestation from '../pages/attestation';
import DocumentAttestation from '../screens/service/documentAttestation';
import Foloosi from '../screens/foloosi';
import VisaStack from './visa_stack';
//import ServiceDetail from '../screens/service/srdetails';
import LanguageTranslation from '../screens/service/languageTranslation';
import {createStackNavigator} from 'react-navigation-stack';
import {hdrStyles} from '../pages/uicomponents/components';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../pages/uicomponents/components';
export default DashboardStack = createStackNavigator(
  {
    ServiceHome,
    Attestation,
    DocumentAttestation,
    LanguageTranslation,
    Foloosi,
    VisaStack: {
      screen: VisaStack,
      navigationOptions: {
        header: null,
      },
    },
    //ServiceDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
