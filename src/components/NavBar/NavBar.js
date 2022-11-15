import React from 'react'
import { View, StyleSheet } from 'react-native'
import ButtonNav from './ButtonNav'

export default function NavBar() {
    return (
        <View style={styles.container}>
            <ButtonNav></ButtonNav>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: "#0000ff",
        borderRadius: 8,
    }
})
