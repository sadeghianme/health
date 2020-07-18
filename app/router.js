import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './desktop/mainPage';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainPage} />
            {/*<Stack.Screen name="Notifications" component={Notifications} />*/}
            {/*<Stack.Screen name="Profile" component={Profile} />*/}
            {/*<Stack.Screen name="Settings" component={Settings} />*/}
        </Stack.Navigator>
    );
}
