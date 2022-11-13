import React from 'react'
import { Text, View } from 'react-native'
import ButtonNav from '../components/NavBar/ButtonNav'
import NavBar from '../components/NavBar/NavBar'

export default function Home() {
    return (
        <View>
            <Text style={{fontSize: 45}}>
                Pablo gay
            </Text>
            <NavBar />
        </View>
    )
}


