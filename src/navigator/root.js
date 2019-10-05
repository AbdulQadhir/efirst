import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './auth_stack';
import MainMenu from './root_main';
import ExternalRegister from './ext_reg_stack';
const root = createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    MainMenu: {
      screen: MainMenu,
    },
    ExternalRegister: {
      screen: ExternalRegister,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(root);
