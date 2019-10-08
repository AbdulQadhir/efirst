import {createStackNavigator} from 'react-navigation-stack';
import LangSelection from '../screens/splashscreen/lang_selection';
import SplashSlider from '../screens/splashscreen/index';

export default SplashStack = createStackNavigator(
  {
    LangSelection: {
      screen: LangSelection,
    },
    SplashSlider: {
      screen: SplashSlider,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);
