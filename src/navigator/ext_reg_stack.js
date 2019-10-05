import Dashboard from '../screens/dashboard';
import {createStackNavigator} from 'react-navigation-stack';
import {hdrStyles} from '../pages/uicomponents/components';
import ExternalLogin from '../screens/auth/externalLogin';
export default DashboardStack = createStackNavigator(
  {
    ExternalLogin,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
