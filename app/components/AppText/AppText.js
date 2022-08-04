import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import styles from './styles';

function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
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

// style ka props dia hai k isay kahi bhi use kar sakain.
// array mai dia hai style ka props takay 2 props ek sath use kar sakain.
// style wala prop card.js mai use kara hai.