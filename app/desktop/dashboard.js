import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, Button, View, ScrollView} from 'react-native';
export default class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        // variable
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                padding: 5,
            },
            subContainer: {
                flex: 1,
            },
            box: {
                flex: 1, 
                margin: 5,       
                padding: 10,
                maxHeight: 250,
                height: 250,
                backgroundColor: '#fff',
                borderRadius: 10,
              },
              exercise: {
                height: 120
              }
        })
        return (
            <ScrollView  showsVerticalScrollIndicator={false}  
                contentContainerStyle={styles.container}>
                    <View style={styles.subContainer}>
                        <View style={styles.box}>
                            <Text>Mehdi </Text>
                            <Button title="Profile" onPress={() => {this.props.navigation.navigate('Profile')}}></Button>
                        </View>
                        <View style={styles.box}>
                            <Text>Mehdi Sadeghian3</Text>
                        </View>
                        <View style={[styles.box, styles.exercise]}>
                            <Text>Mehdi Sadeghian2</Text>
                        </View>
                    </View>
                    <View style={styles.subContainer}>
                        <View style={[styles.box, styles.exercise]}>
                            <Text>Mehdi Sadeghian2</Text>
                        </View>
                        <View style={styles.box}>
                            <Text>Mehdi Sadeghian3</Text>
                        </View>
                        <View style={styles.box}>
                            <Text>Mehdi Sadeghian3</Text>
                        </View>
                    </View>
                          
            </ScrollView>
        );
    }
}
