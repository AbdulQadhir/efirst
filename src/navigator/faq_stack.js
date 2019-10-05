import React, {Component} from 'react';
import FAQHome from '../pages/faqHome';
import FaqQuestions from '../pages/faqQuestions';
import {createStackNavigator} from 'react-navigation-stack';
import {navigation} from 'react-navigation';
import {
  HeaderBtnProfile,
  hdrStyles,
} from '../pages/uicomponents/components';

export default ProfileStack = createStackNavigator(
  {
    FAQHome,
    FaqQuestions
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
