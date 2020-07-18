/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// import MainPage from './app/desktop/mainPage';
// import Welcome from './app/desktop/welcome';
// const Stack = createStackNavigator();
//
// const App: () => React$Node = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Rakuten Health" component={Welcome} />
//         <Stack.Screen name="Home" component={MainPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;


import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Welcome from './app/desktop/welcome';
import MainPage from './app/desktop/mainPage';

const RootStack = createStackNavigator(
    {
        Welcome: Welcome,
        Home: MainPage
    },
    {
        initialRouteName: "Welcome"
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
