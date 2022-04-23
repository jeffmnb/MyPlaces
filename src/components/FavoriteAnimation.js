import React from 'react';

import { StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';

import colors from '../styles/colors';

import FavoriteAnimationLottie from '../images/favoriteAnmation.json';

export const FavoriteAnimation = () => {
    return (
        <View style={styles.container}>
            <LottieView source={FavoriteAnimationLottie} autoPlay loop style={styles.animation}/>
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkTranparent,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },

    animation: {
        backgroundColor:'transparent',
        width: '100%',
        height: '100%'
    }
})