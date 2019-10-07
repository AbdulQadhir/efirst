import {createStackNavigator} from 'react-navigation-stack';
import LangSelection from '../screens/splashscreen/lang_selection';
import SplashSlider from '../screens/splashscreen/index';

export default SplashStack = createStackNavigator(
  {
    SplashSlider: {
      screen: SplashSlider,
    },
    LangSelection: {
      screen: LangSelection,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);
