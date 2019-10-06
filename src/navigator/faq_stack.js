import React, {Component} from 'react';
import FAQHome from '../screens/faq';
import FaqQuestions from '../screens/faq/questions';
import {createStackNavigator} from 'react-navigation-stack';
import {navigation} from 'react-navigation';
import {HeaderBtnProfile, hdrStyles} from '../pages/uicomponents/components';

export default ProfileStack = createStackNavigator(
  {
    FAQHome,
    FaqQuestions,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
