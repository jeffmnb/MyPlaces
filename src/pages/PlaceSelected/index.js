import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';

import { Button } from '../../components/Button';

import { MaterialIcons, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import fonts from '../../styles/fonts';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import { useNavigation, useRoute } from '@react-navigation/native';

import { deletePlaceFavorite, loadFavorites, SavePlaceFavorite } from '../../libs/Storage';

export const PlaceSelected = () => {

    const Route = useRoute();
    const { Place , dataHotel } = Route.params;

    // console.log(dataHotel.data.roomsAndRates);

    const navigation = useNavigation();

    const [buttonLiked, setButtonLiked] = useState();

    useEffect(() => {

        const verificateFavorite = async () => {

            let hasPlace = await loadFavorites();

            const teste = hasPlace.some(item => item.id === Place.id);

            if (teste) {
                setButtonLiked(true);
            }

        };

        verificateFavorite();
    }, [hundleSaveFavorite]);


    const hundleSaveFavorite = async () => {
        setButtonLiked(oldValue => !oldValue);

        if (!buttonLiked) {

            console.log('Salvo');

            await SavePlaceFavorite(Place);



        } else if (buttonLiked) {
            console.log('Deletado');
            await deletePlaceFavorite(Place);
        };


    };

    return (
        <ScrollView style={{backgroundColor:colors.backgroundDark}}>


            <View style={styles.container}>

                <View style={styles.imageArea}>
                    <Image source={{ uri: Place.optimizedThumbUrls.srpDesktop }} style={styles.image} />

                    <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'space-between', width: '100%', paddingHorizontal: 30, top:getStatusBarHeight() + 10}}>
                        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Main')}>
                            <MaterialIcons name="keyboard-arrow-left" size={30} color={colors.grey} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonFavorite} onPress={hundleSaveFavorite}>
                            <MaterialIcons name={buttonLiked ? "favorite" : "favorite-outline"} size={24} color={buttonLiked ? '#ef4b60' : colors.grey} onPress={hundleSaveFavorite} />
                        </TouchableOpacity>
                    </View>

                </View>




                <View style={styles.dataArea}>
                    <View style={{ marginTop: '5%' }}>
                        <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 22 }}>{dataHotel.data.name}</Text>
                        <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 17 }}>{dataHotel.data.featuredPrice.currentPrice.formatted}</Text>
                        <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 12 }}>{dataHotel.data.address.fullAddress}</Text>
                    </View>

                    <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 18, marginVertical: '5%' }}>Detalhes</Text>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ width: 80, height: 80, backgroundColor: colors.backgroundLight, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                            <Feather name="maximize" size={35} color={colors.grey} />
                            <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 14, marginTop: 5 }}>100 m2</Text>
                        </View>

                        <View style={{ width: 80, height: 80, backgroundColor: colors.backgroundLight, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                            <Ionicons name="bed-outline" size={40} color={colors.grey} />
                            <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 14, marginBottom: 2 }}>Qtd: 2</Text>
                        </View>

                        <View style={{ width: 80, height: 80, backgroundColor: colors.backgroundLight, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                            <FontAwesome5 name="bath" size={29} color={colors.grey} />
                            <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 14, marginTop: 5 }}>Qtd: 3</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 18, marginVertical: '7%' }}>Vantagens do imóvel</Text>

                    <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 13, marginVertical: '5%' }}>- Ar Condicionado</Text>
                        <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 13, marginVertical: '5%' }}>- Internet WIFI</Text>
                    </View>

                    <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10%' }}>
                        <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 13, marginVertical: '5%' }}>- Suite</Text>
                        <Text style={{ fontFamily: fonts.text, color: colors.grey, fontSize: 13, marginVertical: '5%' }}>- Vista p/ Mar</Text>
                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Button title='Agendar' />
                    </View>

                </View>

            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.backgroundDark,
    },

    imageArea: {
        width: '100%',
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: 250,
    },

    dataArea: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.backgroundDark,
        paddingHorizontal: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        bottom: '1.7%',
    },

    buttonBack: {
        backgroundColor: colors.darkTranparent,
        width: 42,
        height: 42,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonFavorite: {
        backgroundColor: colors.darkTranparent,
        width: 42,
        height: 42,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    }
})