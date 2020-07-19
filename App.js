/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './app/desktop/mainPage';
import Welcome from './app/desktop/welcome';
import Privacy from './app/desktop/privacy';
import Profile from './app/desktop/profile';
import WalkPage from './app/desktop/walkPage';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={MainPage} />
        <Stack.Screen name="Privacy" options={{headerShown: false}} component={Privacy} />
        <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        <Stack.Screen name="walk" options={{headerShown: false}} component={WalkPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import Welcome from './app/desktop/welcome';
// import MainPage from './app/desktop/mainPage';
//
// const RootStack = createStackNavigator(
//     {
//         Welcome: Welcome,
//         Home: MainPage
//     },
//     {
//         initialRouteName: "Welcome"
//     }
// );
//
// const AppContainer = createAppContainer(RootStack);
//
// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }
