import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/navigator/Tabs';

export default function App() {

    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}
