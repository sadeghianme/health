import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import HighchartsReactNative from '@highcharts/highcharts-react-native'

import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          chartOptions: {
              series: [{
                  data: [1, 2, 3]
              }]
          }
      };
    }
    render() {
        // variable
        const styles = StyleSheet.create({

        })
        return (
            <ScrollView contentContainerStyle={styles.container}>
             <FontAwesome name='trophy' />
             <Text>Mehdi</Text>
             {/* <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                /> */}
            </ScrollView>
        );
    }
}
