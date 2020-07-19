import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class WalkPage extends React.Component {
    constructor() {
        super();
        this.state = {
          }
    };
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                                 onPress={() => {this.props.navigation.navigate('Home')}}>
                        <FontAwesome style={styles.icon} name="angle-left" size={30} color="#fff"></FontAwesome>
                    </TouchableOpacity>
                    <Text style={styles.text}>Dashboard</Text>
                </View>
                <View style={styles.chart}>
                    {/* <ScrollView> */}
                        <Image
                            style={styles.chartImg}
                            resizeMode="cover" source={require('./../../assets/images/walkpage.png'
                        )}
                        />
                    {/* </ScrollView> */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 110,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4749a6'
    },
    icon: {
        marginTop: -15,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#eee',
        paddingLeft: 9,
        paddingRight: 9
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: -15,
        color: '#fff',
    },
    chart: {
        width: '100%',
        marginTop: -50,
        zIndex:2,
        overflow: 'hidden',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartImg: {
        borderRadius: 20,
        width: '100%',
        height: '92%'
    }
})