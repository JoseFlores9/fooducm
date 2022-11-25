import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function CategoriesList(props) {
    const { categories=[] } = props
    return (
        <View style={styles.container}>
            {categories.map((cat, index) =>
                <View key={index} style={styles.category(index % 2 === 0)}>
                    <TouchableHighlight
                    >
                        <View style={{alignItems: "center"}}>
                            <Image
                                source={{uri: cat.image}}
                                style={styles.photo}
                                />
                            <Text style={styles.title}>
                                {cat.title}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            )}
        </View>
    )
}
export const styles = StyleSheet.create({
    photo: {
        width: 50,
        height: 50
    },
    category: (index) => ({
        width: "46%",
        height: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: index ? 0 : "3%",
        marginBottom: 16,
        backgroundColor: "#448CE8"
    }),
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        color: "white"
    }
})
