import React from 'react';
import { View, StyleSheet, Text  } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import colors from '../config/colors';

function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
       
        <Text style={styles.text}>{title}</Text>
        
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

// props pass kar k le k gaye app.js mai.
// props ko destructure kara hua hai title & onPress.

// props color to pass color
// background color overwrite karaya <TouchableOpacity /> k andar array object ki madad se kyun k right wala left walay ko overwrite kar leta hai.