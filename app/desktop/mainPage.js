import React from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from './profile';
import Dashboard from './dashboard';

const Tab = createBottomTabNavigator();

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = StyleSheet.create({
     
    });
    // variable
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'gratipay';
              } else if (route.name === 'Together') {
                iconName = focused ? 'users' : 'user';
              } else if (route.name === 'Discover') {
                iconName = focused ? 'globe' : 'globe';
              }

              // You can return any component that you like here!
              return  <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ff00bf',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: '#eee',
            },
          }}
        >
          <Tab.Screen name="Home" component={Dashboard} />
          <Tab.Screen name="Together" component={Profile} />
          <Tab.Screen name="Discover" component={Profile} />
        </Tab.Navigator>
    
    );
  }
}
