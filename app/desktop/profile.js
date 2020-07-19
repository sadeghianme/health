import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = StyleSheet.create({
        
    });
    return (
      <View>
        <Text>Profile</Text>
        {/* <Ionicons name="ios-list-box" />; */}
      </View>
    );
  }
}
