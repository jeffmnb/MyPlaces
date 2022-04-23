import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Button = ({title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.txtButton}>{title}</Text>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({
    container: {
        width:'80%',
        height:50,
        borderRadius:10,
        marginBottom:'10%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.primary
    },

    txtButton: {
        fontFamily: fonts.text,
        color: colors.white,
        fontSize: 20
    }
})