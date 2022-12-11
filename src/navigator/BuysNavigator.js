import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { AllBuys } from '../screens/AllBuys';
import { Buy } from '../screens/Buy';

const Stack = createStackNavigator();

export const BuysNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista compras" component={AllBuys} />
            <Stack.Screen name="Detalle" component={Buy} />
        </Stack.Navigator>
    )
}
