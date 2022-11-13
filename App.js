import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { listProducts } from './src/mocks/products'
import Products from './src/screens/Products'
import Home from './src/screens/Home'

export default function App() {

    return (
        <NavigationContainer>
            <Products />
        </NavigationContainer>
    )
}
