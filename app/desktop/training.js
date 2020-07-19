import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
export default class Training extends React.Component {
    constructor() {
        super();
        this.state = {
          }
    };
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.text}>Training</Text>
                    <Image
                        style={styles.icon}
                        resizeMode="cover" source={require('./../../assets/images/healthy.png'
                    )}
                    />
                </View>
                <View style={styles.chart}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>85</Text>
                    <Text>Min</Text>
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