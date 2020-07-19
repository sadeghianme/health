import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainPage from './desktop/mainPage';
import Welcome from './desktop/welcome';

const Stack = createStackNavigator();

function MyStack() {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Rakuten Health" component={Welcome} />
    //   <Stack.Screen name="Home" component={MainPage} />
    //   {/*<Stack.Screen name="Notifications" component={Notifications} />*/}
    //   {/*<Stack.Screen name="Profile" component={Profile} />*/}
    //   {/*<Stack.Screen name="Settings" component={Settings} />*/}
    // </Stack.Navigator>
  );
}
