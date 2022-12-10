import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/navigator/Tabs';
import { CartProvider } from './src/context/CartContext';

export default function App() {

    return (
        <NavigationContainer>
            <CartProvider>
                <Tabs/>
            </CartProvider>
        </NavigationContainer>
    )
}
