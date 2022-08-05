import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText/AppText';

function ListItem({title, subTitle, image}) {
    return (

        <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log()
        }>
        <View style={styles.container}>

            <Image style={styles.image} source={image} />

            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>

    );
}

export default ListItem;  

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title:{
        fontWeight: "500"
    },
    SubtleCrypto:{
        color: colors.medium,
    }
})

// props pass kar rahay hain so we can use at many places.

// TouchableHighlight onpress k event per chalta hai
// TouchableHighlight mai underlayColor ka builtin prop use kara touch oper color dene k liye.

