import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, ScrollView } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Ionicons } from '@expo/vector-icons';
import { Button } from './Button';


export const ModalFilter = ({ hundleModalClose }) => {
    return (

        <ScrollView>



            <View style={{ flex: 1, backgroundColor: colors.darkTranparent, justifyContent: 'flex-end' }}>

                <View style={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.txtHeader}>Filtrar</Text>

                        <Ionicons name="close" size={35} color="white" onPress={hundleModalClose} />
                    </View>

                    <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 17, width: '100%' }}>Tamanho</Text>

                    <View style={styles.sizeArea}>
                        <View style={{ marginHorizontal: '7%' }}>
                            <Text style={styles.txtTitle}>Mínimo</Text>

                            <TextInput placeholder="Ex: 20" placeholderTextColor={colors.grey} style={styles.inputs} />
                        </View>

                        <View style={{ marginHorizontal: '7%' }}>
                            <Text style={styles.txtTitle}>Máximo</Text>

                            <TextInput placeholder="Ex: 20" placeholderTextColor={colors.grey} style={styles.inputs} />
                        </View>

                    </View>

                    <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 17, width: '100%' }}>Preço</Text>

                    <View style={styles.priceArea}>
                        <View style={{ marginHorizontal: '7%' }}>
                            <Text style={styles.txtTitle}>Mínimo</Text>

                            <TextInput placeholder="Ex: 20" placeholderTextColor={colors.grey} style={styles.inputs} />
                        </View>

                        <View style={{ marginHorizontal: '7%' }}>
                            <Text style={styles.txtTitle}>Máximo</Text>

                            <TextInput placeholder="Ex: 20" placeholderTextColor={colors.grey} style={styles.inputs} />
                        </View>

                    </View>

                    <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 17, width: '100%' }}>Quartos</Text>

                    <View style={{ width: '100%', right: 20, marginBottom: '10%' }}>
                        <View style={{ marginHorizontal: '7%' }}>
                            <Text style={styles.txtTitle}>Mínimo</Text>

                            <TextInput placeholder="Ex: 20" placeholderTextColor={colors.grey} style={styles.inputs} />
                        </View>

                    </View>

                    <Text style={{ fontFamily: fonts.text, color: colors.white, fontSize: 17, width: '100%' }}>Banheiros</Text>

                    <View style={{ width: '100%', right: 20, marginBottom:'14%' }}>
                        <View style={{ marginHorizontal: '7%' }}>
                            <Text style={styles.txtTitle}>Mínimo</Text>

                            <TextInput placeholder="Ex: 20" placeholderTextColor={colors.grey} style={styles.inputs} />
                        </View>

                    </View>

                    <Button title='Aplicar'/>

                </View>
            </View>

        </ScrollView>

    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '95%',
        backgroundColor: colors.backgroundDark,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '17%',
        top: 45
    },

    txtHeader: {
        fontFamily: fonts.heading,
        fontSize: 30,
        color: colors.white
    },

    areaFilter: {
        width: '100%',
        height: 150,
    },

    sizeArea: {
        flexDirection: 'row',
        marginBottom: '10%'
    },

    priceArea: {
        flexDirection: 'row',
        marginBottom: '10%'
    },

    inputs: {
        width: 150,
        height: 50,
        backgroundColor: colors.backgroundLight,
        borderRadius: 10,
        paddingHorizontal: 12
    },

    txtTitle: {
        fontFamily: fonts.text,
        color: colors.white,
        fontSize: 15,
        marginBottom: '3%',
        marginTop: '7%'
    },

    bathArea: {

    }

})