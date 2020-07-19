import React, { useState } from "react";
import {Text, View, CheckBox, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }


    render() {
        // const [isSelected, setSelection] = useState(false);
    // variable
        const image = { uri: "https://claudia.abril.com.br/wp-content/uploads/2016/09/mulher-correndo-exercicios.jpg" };
        const isSelected = false;
        const setSelection = () => {
            this.setState({isSelected: !this.state.isSelected});
        };
    const styles = StyleSheet.create({
        container: {
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            // margin: 16,
            position: "relative"
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
            fontWeight: "700",
            opacity: 1
        },
        termsText: {
            marginBottom: 10,
            fontSize: 16,
        },
        privacyText: {
            fontSize: 16,
            color: "#0b79ff"
        },
        acceptNotification: {
            // marginBottom: 10,
            fontSize: 14,
        },
        continue: {
            paddingRight: 16,
            paddingLeft: 16,
            width: "100%",
            height: "20%",
            bottom: 0
        },
        continueBtn: {
            backgroundColor: '#ff18b7',
            color: "#fff",
            padding: 10,
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
        },
        buttonText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "500"
        },
        button: {
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center"
        },
        agree: {
            // margin: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
        checkbox: {
            marginTop: 3,
            width: 15,
            height: 15,
            borderColor: "#030503",
            marginRight: 10,
            borderRadius: 50
        },
        image: {
           opacity: .3,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            margin: -16
        }
    });
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>

        </ImageBackground>
          <View style={styles.welcome}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <Text style={styles.welcomeText}>FitMate</Text>
          </View>
        <View style={styles.continue}>
            <Text style={styles.termsText}>By Continuing, you agree to the <Text style={styles.privacyText} onPress={() => {this.props.navigation.navigate('Privacy')}}>Privacy Notice.</Text>
            </Text>
          <View style={styles.agree}>
              <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
              /><Text style={styles.acceptNotification}>I agree to get notification for Rakuten Health promotion and marketing information
                  (optional) </Text>
          </View>
            <View style={styles.button}>
                {/*<View style={styles.continueBtn}>*/}
                    <TouchableOpacity
                        style={styles.continueBtn}
                        onPress={() => {this.props.navigation.navigate('Home')}}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    {/*<Button*/}
                    {/*    onPress={() => {this.props.navigation.navigate('Home')}}*/}
                    {/*    title="Continue"*/}
                    {/*    color="#fff"*/}
                    {/*/>*/}
                {/*</View>*/}
            </View>


        </View>

      </View>
    );

  }
}
