import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, Text, TouchableOpacity, Image, Button, View, ScrollView} from 'react-native';
import Calories from './calories'
import Sleep from './sleep';
import Walk from './walk';
import Water from './water';
import Heart from './heart';
import Training from './training';
export default class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        // variable

        return (
            <View style={styles.page}>              
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View style={styles.headerAccount}>
                            <Image
                                style={styles.headerAvator}
                                resizeMode="cover" source={require('./../../assets/images/tareq_amin.jpg'
                            )}
                            />
                        </View>
                        <View style={styles.headerScore}>
                            <Image
                                style={styles.headerCup}
                                resizeMode="cover" source={require('./../../assets/images/cup.png'
                            )}
                            />
                            <Text style={styles.headerText}>626</Text>
                        </View>
                    </View>
                    <View style={styles.headerBottom}>
                        <Text style={styles.headerBottomDate}>July 20, 2020</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.headerBottomUser}>Good Day, Tareq!</Text>
                            <Image
                                    style={{height: 20, width: 15, marginLeft: 5}}
                                    resizeMode="cover" source={require('./../../assets/images/flame.png'
                                )}
                                />
                        </View>
                    </View>
                </View>
                <View style={{zIndex: 9, marginTop: -100, paddingBottom: 230}}>
                    <ScrollView showsVerticalScrollIndicator={false}  
                    contentContainerStyle={styles.container}>
                        <View style={styles.subContainer}>
                            <View style={styles.box}>
                               <Calories />
                            </View>
                            <View style={styles.box}>
                                <Heart />
                            </View>
                            <View style={[styles.box, styles.exercise]}>
                                <Training />
                            </View>
                        </View>
                        <View style={styles.subContainer}>
                            <View style={[styles.box, styles.exercise]}>
                                <Sleep />
                            </View>
                            <View style={styles.box}>
                                <TouchableOpacity
                                 onPress={() => {this.props.navigation.navigate('walk')}}>
                                   <Walk />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.box}>
                                <Water />
                            </View>
                        </View>
                            
                    </ScrollView>
                </View>
               
    
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ededed',
    },
    header: {
        height: 230,
        flex: 1,
        minHeight: 230,
        backgroundColor: '#3f41a4',
    },
    headerTop: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerBottom: {
        height: 50,
        marginLeft: 15
    },
    headerBottomDate: {
        fontSize: 12,
        color: '#fff'
    },
    headerBottomUser: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '500'
    },
    headerAccount: {
        width: 60,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginLeft: 15,
        overflow: 'hidden',
        borderColor: '#fff',
        borderWidth: 4
    },
    headerAvator: {
        width: 65,
        height: 65
    },
    headerScore: {
        width: 90,
        height: 40,
        backgroundColor: '#22222240',
        borderRadius: 20,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerCup: {
        height: 24,
        width: 22
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 5
    },
    container: {
        flexDirection: 'row',
        padding: 5,
    },
    subContainer: {
        flex: 1,
        zIndex: 5
    },
    box: {
        zIndex: 9,
        flex: 1, 
        margin: 7,       
        padding: 12,
        maxHeight: 250,
        height: 250,
        borderRadius: 20,
        backgroundColor: '#fff',
      },
    exercise: {
        height: 120
      }
})