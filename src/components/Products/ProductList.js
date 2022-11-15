import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function ProductList(props) {

    const { products=[], handleSelectProds, selectedProds } = props

    return (
        <View style={styles.container}>
            {products && products.map((p, index)=>
                <View
                    key={index}
                    style={styles.product(index % 2 === 0, selectedProds.includes(p.productId))}
                >
                    <Image
                        source={{uri: p.image}}
                        style={styles.photo}
                    />
                    <Text style={styles.title}>
                        {p.title}
                    </Text>
                    <Text>
                        {p.price}
                    </Text>
                    <Button
                        title={selectedProds.includes(p.productId) ? 'Quitar' : 'Agregar'}
                        onPress={() => handleSelectProds(p.productId)}
                    />
                </View>
            )}
        </View>
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
    product: (index, contains) => ({
        width: "48%",
        borderRadius: 4,
        borderColor: contains ? '#FF5733' : '#0066cb',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: index ? 0 : 16,
        marginBottom: 16,
        paddingVertical: 16
    }),
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 16,
    },
    price: {
    }
})
