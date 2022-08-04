import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import styles from './styles';

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

// const styles = StyleSheet.create({ 
//     // text:{
//     //     fontSize: 18,
//     //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", 
//     // }


//     // text:{
//     //     color: "tomato",
//     //     ...Platform.select({
//     //         ios: {
//     //             fontSize: 20,
//     //             fontFamily: 'Avenir'
//     //         },
//     //         android: {
//     //             fontSize: 18,
//     //             fontFamily: "Roboto"
//     //         }
//     //     })
//     // }
// })

// jo bhi props mai pass kara hai wo <AppText> mai show hoga as a <Text> component