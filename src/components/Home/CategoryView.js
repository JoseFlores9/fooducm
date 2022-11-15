import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function CategoryView(props) {

    const { categories } = props

    return (
        <View>
            <ScrollView horizontal={true}>
                {categories.map((cat, index) =>
                    <TouchableHighlight
                        key={index}
                        onPress={() => console.log(cat.catName)}
                        activeOpacity={0.6}
                        underlayColor= 'transparent'
                    >
                        <View
                            style= {styles.container}
                        >
                            <Text
                                style={styles.title}
                            >
                                {cat.catName}
                            </Text>
                            <Image
                                source={{uri: cat.catImage}}
                                style={styles.photo}
                            />
                        </View>
                    </TouchableHighlight>
                )}
            </ScrollView>
        </View>
    )

}

export const styles = StyleSheet.create({
    photo: {
        width: 100,
        height: 100
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#4AEAE2',
        borderRadius: 8,
        marginHorizontal: 8,
        padding: 8
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
})