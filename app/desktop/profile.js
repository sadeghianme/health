import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
export default class Profile extends React.Component {
    constructor() {
        super();
    }
    render() {
        // variable
        const styles = StyleSheet.create({

        })
        return (
            <ScrollView contentContainerStyle={styles.container}>
             <FontAwesome name='trophy' />

            </ScrollView>
        );
    }
}
