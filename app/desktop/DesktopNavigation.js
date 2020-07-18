import {createStackNavigator} from '@react-navigation/stack';

import MainPage from './mainPage';
const DesktopNavigator = createStackNavigator({
  Home: {
    screen: MainPage,
    NavigationOptions: {
      header: null,
    },
  },
});

export default DesktopNavigator;
