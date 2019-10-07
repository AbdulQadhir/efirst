import {createStackNavigator} from 'react-navigation-stack';
import SplashSlider from '../screens/splashscreen';

export default SplashStack = createStackNavigator(
  {
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
