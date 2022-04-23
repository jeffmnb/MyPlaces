import React from 'react';

import { StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';

import colors from '../styles/colors';

import LoadingLottie from '../images/loading.json';

export const Loading = () => {
    return (
        <View style={styles.container}>
            <LottieView source={LoadingLottie} autoPlay loop style={styles.animation} />
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundLight,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },

    animation: {
        backgroundColor: 'transparent',
        width: 120,
        height: 120
    }
})