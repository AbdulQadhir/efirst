import React, {Component} from 'react';
import VisaHome from '../screens/service/visa';
import VisaFlow from '../screens/service/visa/visaFlow';
import VisaDocs from '../screens/service/visa/visaServiceUpload';
import VisaDetails from '../screens/service/visa/visaServiceText';
import VisaDetails2 from '../screens/service/visa/visaServiceText2';
import VisaPersonalDt from '../screens/service/visa/personalDt';
import {createStackNavigator} from 'react-navigation-stack';
import {hdrStyles} from '../pages/uicomponents/components';

export default VisaStack = createStackNavigator(
  {
    VisaHome,
    VisaFlow,
    VisaDocs,
    VisaDetails,
    VisaDetails2,
    VisaPersonalDt,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
