import Announcements from '../screens/announcements';
import {createStackNavigator} from 'react-navigation-stack';
import {hdrStyles} from '../pages/uicomponents/components';

export default AnnouncementStack = createStackNavigator(
  {
    Announcements,
  },
  {
    defaultNavigationOptions: {
      headerStyle: hdrStyles.header,
      headerTintColor: '#fff',
      headerTitleStyle: hdrStyles.title,
    },
  },
);
