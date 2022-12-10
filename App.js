import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/navigator/Tabs';
import { CartProvider } from './src/context/CartContext';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <CartProvider>
                    <Tabs/>
                </CartProvider>
            </AuthProvider>
        </NavigationContainer>
    )
}