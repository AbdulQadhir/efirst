import {
    createAppContainer,
    createSwitchNavigator
  } from "react-navigation";
import AuthStack from "./auth_stack";
import MainMenu from "./root_main";

const root = createSwitchNavigator(
    {
        MainMenu: {
            screen: MainMenu
        },
        Auth: {
            screen: AuthStack
        },
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  );
  
  export default createAppContainer(root);
  