import React from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import Profile from './profile';

const Tab = createBottomTabNavigator();

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = StyleSheet.create({
      box: {
        flex: 1,
        margin: 10,
        padding: 10,
        maxHeight: 250,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
      },
      exercise: {
        height: 120
      }
    });
    // variable
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'Together') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Text>M</Text>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Profile} />
          <Tab.Screen name="Together" component={Profile} />
          {/* <Tab.Screen name="Discover" component={Profile} /> */}
        </Tab.Navigator>

      // <ScrollView showsVerticalScrollIndicator={false}      >
      //   <View style={styles.box}>
      //     <Text>Mehdi </Text>
      //     <Button title="Profile" onPress={() => {this.props.navigation.navigate('Profile')}}></Button>
      //   </View>
      //   <View style={[styles.box, styles.exercise]}>
      //     <Text>Mehdi Sadeghian2</Text>
      //   </View>
      //   <View style={styles.box}>
      //     <Text>Mehdi Sadeghian3</Text>
      //   </View>
      // </ScrollView>
    
    );
  }
}
