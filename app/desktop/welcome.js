import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }


    render() {
    // const [isSelected, setSelection] = false;
    // variable
    const styles = StyleSheet.create({
        container: {
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            margin: 10
        },
        welcome: {
            width: "100%",
            height: "80%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

        },
        welcomeText: {
            fontSize: 30,
            color: "#ff00bf",
            fontWeight: "700"
        },
        continue: {
            width: "100%",
            // backgroundColor: '#378a20',
            height: "20%"
        },
        continueBtn: {

        }
    });
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.welcomeText}>Rakuten Health</Text>
        </View>
        <View style={styles.continue}>
          <Text>By Continuing, you agree to the Privacy Notice.</Text>
          <View>
            <Text>I agree to get notification for Rakuten Health promotion and marketing information
                  (optional) </Text>
          </View>
            <Button style={styles.continueBtn}
                onPress={() => {this.props.navigation.navigate('Home')}}
                title="Continue"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>

      </View>
    );

  }
}
