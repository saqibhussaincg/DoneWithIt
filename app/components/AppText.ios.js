import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

export default AppText;


// Platform.select({
//     ios: {
//         fontSize: 20,
//         fontFamily: 'Avenir'
//     },
//     android: {
//         fontSize: 18,
//         fontFamily: "Roboto"
//     }
// })

const styles = StyleSheet.create({ 
    // text:{
    //     fontSize: 18,
    //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", 
    // }


    text:{
        color: "tomato",
        fontSize: 20,
        fontFamily: 'Avenir'
    }
})

// jo bhi props mai pass kara hai wo <AppText> mai show hoga as a <Text> component