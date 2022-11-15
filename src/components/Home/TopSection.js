import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TopSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Food Ucm
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
