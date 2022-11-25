import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Products from './src/screens/Products'
import { Tabs } from './src/navigator/Tabs'

export default function App() {

    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}
