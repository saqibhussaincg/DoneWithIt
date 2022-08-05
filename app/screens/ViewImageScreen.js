import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (

        <View style={styles.container}>

        <View style={styles.closeIcon}>
            <MaterialCommunityIcons
            name="close"
            color="white"
            size={30}
             />
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
             />
        </View>

        <Image 
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    closeIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30
    }
})

export default ViewImageScreen;

//resizeMode="contain" oper or neche ka area khali chorh kar center mai iamge le ayega.

// kuch css poperties comment kardi kyun k pehle reference k liye color boxes banaye thay ab icon laga rahay hain.

// using materialcommunityicons