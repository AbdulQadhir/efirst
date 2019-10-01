import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DashboardStack from './dash_stack';
import MyRequestStack from './myrequest_stack';
import ServiceStack from './service_stack';
import SideMenu from './SideMenu/SideMenu';
import BottomBar from './BottomBar/BottomBar';

const Tabs = createBottomTabNavigator(
  {
    Dashboard: {screen: DashboardStack},
    MyRequestStack: {screen: MyRequestStack},
    Services: {screen: ServiceStack},
  },
  {
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
    drawerWidth: 250,
  },
);

export default Drawer;
