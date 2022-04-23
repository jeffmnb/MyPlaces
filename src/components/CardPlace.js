import React from 'react';

import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const CardPlace = ({onpressCard, image, title, locale, price}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onpressCard}>

            <View style={styles.areaImage}>
                <Image source={{uri:image}} style={styles.imageCard} resizeMethod='auto'/>
            </View>

            <View style={styles.areaContent}>
                <View style={{flex:1}}>
                    <Text style={{ color: colors.grey, fontSize: 17, fontFamily: fonts.text, maxWidth:'85%' }} numberOfLines={1}>{title}</Text>
                    <Text style={{ color: colors.grey, fontFamily: fonts.complement, fontSize: 12, maxWidth:'85%' }} numberOfLines={1}>{locale}</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight:10 }}>
                    <Text style={{ color: colors.grey, fontSize: 18, fontFamily: fonts.heading }}>{price}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        backgroundColor: colors.backgroundLight,
        borderRadius: 18,
        paddingHorizontal: 7,
        marginBottom:'5%'
    },

    areaContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 7,
    },

    areaImage: {
        width: '100%',
        height: 180,
        marginBottom: 10
    },

    imageCard: {
        width:'104%',
        height: '100%',
        right:7,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }

})