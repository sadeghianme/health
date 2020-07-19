import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
export default class Walk extends React.Component {
    constructor() {
        super();
        this.state = {
          }
    };
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.text}>Walk</Text>
                    <Image
                        style={styles.icon}
                        resizeMode="cover" source={require('./../../assets/images/shoe.png'
                    )}
                    />
                </View>
                <View style={styles.chart}>
                    <Image
                            style={styles.chartImg}
                            resizeMode="cover" source={require('./../../assets/images/steps.png'
                        )}
                        />
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
        width: 35,
        height: 35
    },
    text: {
        fontSize: 16,
        marginRight: 5,
        fontWeight: '700'
    },
    chart: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartImg: {
        marginTop: 30,
        width: '70%',
        height: '65%'
    }
})