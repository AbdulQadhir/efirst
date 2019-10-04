import React, {Component} from 'react';
import ServiceHome from '../pages/service_home';
import Attestation from '../pages/attestation';
import DocumentAttestation from '../screens/service/documentAttestation';
import Foloosi from '../screens/foloosi';
import LanguageTranslation from '../screens/service/languageTranslation';
import {createStackNavigator} from 'react-navigation-stack';
import {HeaderBtnProfile, hdrStyles} from '../pages/uicomponents/components';

export default DashboardStack = createStackNavigator(
  {
    ServiceHome,
    Attestation,
    DocumentAttestation,
    LanguageTranslation,
    Foloosi,
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
