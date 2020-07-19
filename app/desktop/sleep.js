import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
export default class Sleep extends React.Component {
    constructor() {
        super();
        this.state = {
          }
    };
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.text}>Sleep</Text>
                    <Image
                        style={styles.icon}
                        resizeMode="cover" source={require('./../../assets/images/sleep.png'
                    )}
                    />
                </View>
                <View style={styles.chart}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>8:12</Text>
                    <Text>Hours</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between' , 
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40
    },
    text: {
        fontSize: 16,
        marginRight: 8,
        fontWeight: '700'
    },
    chart: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    chartImg: {
        marginTop: 30,
        width: '80%',
    }
})