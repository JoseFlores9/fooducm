import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { BuyCart } from '../screens/BuyCart';
import { BuyProcess } from '../screens/BuyProcess';


const Stack = createStackNavigator();
export const CartNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Carrito" component={BuyCart} />
            <Stack.Screen name="Pagar" component={BuyProcess} />
        </Stack.Navigator>
    )
}
