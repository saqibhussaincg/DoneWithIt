import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet, View} from 'react-native'

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    }
})


// Re-useable component bana lia jise ab kahi bhi use kar sakte hain.
// <Safeareaview> k jagah ab <Screen> use karenge tou same kaam karega.