import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DashboardStack from './dash_stack';
import MyRequestStack from './myrequest_stack';
import FAQStack from './faq_stack';
import ServiceStack from './service_stack';
import SideMenu from './SideMenu/SideMenu';
import BottomBar from './BottomBar/BottomBar';
import ProfileStack from './profile_stack';
import SupportStack from './support_stack';
import AnnounceStack from './announce_stack';
import {calcHeight, calcWidth} from '../config';

const Tabs = createBottomTabNavigator(
  {
    Dashboard: {screen: DashboardStack},
    MyRequestStack: {screen: MyRequestStack},
    Services: {screen: ServiceStack},
    Profile: {screen: ProfileStack},
    FAQ: {screen: FAQStack},
    Support: {screen: SupportStack},
    AnnouncementStack: {screen: AnnounceStack},
  },
  {
    backBehavior: 'none',
    tabBarComponent: BottomBar,
    tabBarOptions: {
      activeTintColor: '#4F4F4F',
      inactiveTintColor: '#ddd',
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const Drawer = createDrawerNavigator(
  {
    Tabs,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: calcWidth(80),
    overlayColor: 'rgba(0, 0, 0, 0)',
  },
);

export default Drawer;
