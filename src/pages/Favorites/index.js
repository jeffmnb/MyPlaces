import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { MaterialIcons } from '@expo/vector-icons';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { CardPlace } from '../../components/CardPlace';

import { loadFavorites } from '../../libs/Storage';

import { getReviewPlaces } from '../../services/calls';

import { useNavigation } from '@react-navigation/native';

export const Favorites = () => {

    const navigation = useNavigation();

    const [myFavorites, setMyFavorites] = useState({});

    const [favoriteExist, setFavoriteExist] = useState(false);

    useEffect(() => {
        const getFavorites = async () => {

            const data = await loadFavorites();

            setMyFavorites(data);

            if (data.length === 0) {
                setFavoriteExist(true)
            } else {
                setFavoriteExist(false)
            };

            console.log(data.length);
        };

        getFavorites();
    }, []);

    const hundlePress = async (PlaceSelected) => {

        const Place = PlaceSelected;

        const dataHotel = await getReviewPlaces(Place.id);

        navigation.navigate('PlaceSelected', { Place, dataHotel })
    }

    return (
        <View style={styles.container}>



            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Main')}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={colors.grey} />
                </TouchableOpacity>

                <Text style={styles.txtHeading}>Favoritos</Text>
            </View>

            <View style={styles.favorites}>

                <FlatList
                    keyExtractor={(item) => String(item.id)}
                    data={myFavorites}
                    renderItem={({ item }) => (
                        <CardPlace image={item.optimizedThumbUrls.srpDesktop} title={item.name} locale={item.address.locality + `, ` + item.address.streetAddress} price={item.ratePlan.price.current} onpressCard={() => hundlePress(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                />

                {
                    favoriteExist && (
                        <View style={styles.areaWithoutFavorite}>
                            <Text style={styles.txtWithoutFavorite}>Sem favoritos :(</Text>
                        </View>


                    )
                }

            </View>


        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.backgroundDark,
        paddingHorizontal: 25,
        paddingTop: getStatusBarHeight() + 30
    },

    txtHeading: {
        fontFamily: fonts.heading,
        color: colors.white,
        fontSize: 38,
        textAlign: 'justify',
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:'12%'
    },

    areaFilter: {
        width: 50,
        height: 50,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    favorites: {
        flex: 1,
        width: '100%'
    },

    buttonBack: {
        backgroundColor: colors.backgroundLight,
        width: 42,
        height: 42,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtWithoutFavorite: {
        fontFamily: fonts.heading,
        color: 'rgba(255,255,255,0.3)',
        fontSize: 24
    },

    areaWithoutFavorite: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '40%'
    }

});