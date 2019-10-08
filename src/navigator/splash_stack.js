import {createSwitchNavigator} from 'react-navigation';
import LangSelection from '../screens/splashscreen/lang_selection';
import SplashSlider from '../screens/splashscreen/index';

export default SplashStack = createSwitchNavigator(
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
