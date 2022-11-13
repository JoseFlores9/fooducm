import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { listProducts } from '../mocks/products'

export default function Products() {
    return (
        <ScrollView>
            <View style={styles.container}>
                {listProducts.map((p, index)=>
                    <View key={index} style={styles.product}>
                        <View style={{width: '100%'}}>
                            <Image
                                source={{uri: p.image}}
                                style={styles.photo}
                                />
                            </View>
                        <Text style={styles.title}>
                            {p.title}
                        </Text>
                        <Text>
                            {p.price}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    photo: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 20
    },
    product: {
        width: "50%",
        borderRadius: 4,
        borderColor: '#000',
        borderWidth: 1,
        flex: 0,
        flexWrap: 'wrap',
        alignItems: 'center' 
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 4,
    },
    price: {
    }
}) 
