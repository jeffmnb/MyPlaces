import React from 'react';

import { createStackNavigator, } from '@react-navigation/stack';

import { Main } from '../pages/Main';
import { PlaceSelected } from '../pages/PlaceSelected';
import { Favorites } from '../pages/Favorites';

export const StackRoutes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='PlaceSelected' component={PlaceSelected} />
            <Stack.Screen name='Favorites' component={Favorites} />
        </Stack.Navigator>
    )

};