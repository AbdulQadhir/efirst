import { createStackNavigator } from "react-navigation-stack";

import LangSelection from "../screens/splashscreen/lang_selection";
import SplashSlider from "../screens/splashscreen/slider";

export default (SplashStack = createStackNavigator(
  {
    SplashSlider: {
      screen: SplashSlider
    },
    LangSelection: {
      screen: LangSelection
    },
    SplashSlider: {
      screen: SplashSlider
    },
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
));
