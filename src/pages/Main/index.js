import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, Modal, FlatList, Alert, } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

import { Ionicons } from '@expo/vector-icons';
import { CardPlace } from '../../components/CardPlace';

import { ModalFilter } from '../../components/ModalFilter';

import { useNavigation } from '@react-navigation/native';;
import { getHousesCall, getPlacesByQuery, getPlacesSearch, getReviewPlaces } from '../../services/calls';
import { Loading } from '../../components/Loading';

import { FontAwesome5 } from '@expo/vector-icons';


export const Main = () => {

    const [hundleModalFilter, setHundleModalFilter] = useState(false);

    const navigaton = useNavigation();

    const [allHouses, setAllHouses] = useState({});

    const [cityUserChoosed, setCityUserChoosed] = useState('');

    const [searchQueryMode, setSearchQueryMode] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getHouses = async () => {

            setSearchQueryMode(false);

            const data = await getHousesCall();

            // console.log(data.data.searchResults.results);

            setAllHouses(data.data.searchResults.results);

            setLoading(false);
                     
        };

        getHouses();
    }, []);


    const hundlePlaceSelected = async (PlaceSelected) => {

        setLoading(true);

        const Place = PlaceSelected;

        const dataHotel = await getReviewPlaces(PlaceSelected.id);

        navigaton.navigate('PlaceSelected', { Place, dataHotel });

        setTimeout(() => {
            setLoading(false);
        }, 200);

        // console.log(PlaceSelected);
    }


    const hundleSearchByQuery = async () => {

        // setSearchQueryMode(true);

        // const dataSearch = await getPlacesByQuery();

        // setAllHouses(dataSearch);

        Alert.alert('Aviso', 'Api usada parou de fornecer dados pela query.')
    }


    if (loading) return <Loading />

    return (
        <View style={styles.container}>

            <StatusBar barStyle={'light-content'} />

            <View style={styles.header}>
                <Text style={styles.txtHeading}> Encontre aqui {'\n'} seu imóvel</Text>

                <TouchableOpacity style={styles.areaFilter} onPress={() => setHundleModalFilter(true)}>
                    <Ionicons name="filter" size={24} color={colors.white} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.areaFilter} onPress={() => navigaton.navigate('Favorites')}>
                    <Ionicons name="person-circle-outline" size={25} color={colors.grey} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={{ color: colors.white, fontFamily: fonts.complement, fontSize: 18, marginBottom: 5 }}>Localização</Text>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput placeholder="Digite uma cidade" value={cityUserChoosed} placeholderTextColor={colors.grey} style={styles.inputSearch} onChangeText={(text) => setCityUserChoosed(text)} />

                    <View style={styles.areaSearch} onPress={() => hundleSearchByQuery()}>
                        <FontAwesome5 name="search-location" size={24} color={colors.grey} onPress={() => hundleSearchByQuery()} />
                    </View>

                </View>



                <FlatList
                    keyExtractor={(item) => String(item.id)}
                    data={allHouses}
                    renderItem={({ item }) => (

                        <CardPlace
                            onpressCard={() => hundlePlaceSelected(item)}
                            title={item.name} locale={item.address.locality + `, ` + item.address.streetAddress}
                            price={item.ratePlan.price.current}
                            image={item.optimizedThumbUrls.srpDesktop}
                        />

                    )}
                    showsVerticalScrollIndicator={false}
                />

                <Modal animationType='slide' visible={hundleModalFilter} transparent={true} onRequestClose={() => setHundleModalFilter(false)}>
                    <ModalFilter hundleModalClose={() => setHundleModalFilter(false)} />
                </Modal>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.backgroundDark,
        paddingHorizontal: 25,
        paddingTop: getStatusBarHeight() + 30
    },

    txtHeading: {
        fontFamily: fonts.heading,
        color: colors.white,
        fontSize: 28,
        textAlign: 'justify',
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    areaFilter: {
        width: 50,
        height: 50,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    content: {
        width: '100%',
        justifyContent: 'center',
        marginTop: '25%'
    },

    inputSearch: {
        width: '100%',
        height: 50,
        backgroundColor: colors.backgroundLight,
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingTop: 6,
        fontSize: 15,
        fontFamily: fonts.text,
        marginBottom: 30,
        color: colors.grey
    },

    areaSearch: {
        height: 50,
        width:45,
        backgroundColor: colors.backgroundLight,
        borderRadius: 7,
        right: '55%',
        justifyContent:'center',
        alignItems:'center',
    }


})