import {createStackNavigator} from '@react-navigation/stack';

import MainPage from './mainPage';
import Welcome from './welcome';
const DesktopNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    NavigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: MainPage,
    NavigationOptions: {
      header: null,
    },
  },
});

export default DesktopNavigator;
