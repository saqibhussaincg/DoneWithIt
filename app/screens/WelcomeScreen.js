import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       blurRadius={5}
       style={styles.background}
       source={require('../assets/background.jpg')}
       >
    <View style={styles.logoContainer}>
    <Image 
    style={styles.logo}
    source={require('../assets/logo-red.png')} />
    <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>

    <View style={styles.buttonsContainer}>
    {/* <View style={styles.loginButton}></View> */}
    <AppButton title="Login" color="primary" />
    {/* <View style={styles.registerButton}></View> */}
    <AppButton title="Register" color="secondary" />
    </View>

       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    // loginButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: '#fc5c65'
    // },
    // registerButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: '#4ecdc4'
    // },
    logo:{
        width: 100,
        height: 100,
       
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    tagline:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
    
})

export default WelcomeScreen;

//  <ImageBackground> ka tag lia or os k andar BG laga dia or os k andar sare component bana diye.

// logo or text k liye parent container banaya or osay position absolute de di kyun k is ka container imagebackground wala tag hai.