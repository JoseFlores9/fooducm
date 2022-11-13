import React, { useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Products(props) {
    const { products } = props
    const [selectedProds, setSelectedProds] = useState([])

    const handleSelectProds = (prodId) => {
        let temProds = selectedProds.slice()
        if(selectedProds.includes(prodId)){
            temProds.splice(temProds.indexOf(prodId), 1)
            setSelectedProds(temProds)
        }
        else{
            temProds.push(prodId)
            setSelectedProds(temProds)
        }
    }

    return (
        <View>
            <ScrollView>
                <View style={{backgroundColor: '#0000ff', padding: 8}}>
                    <Text style={{fontSize: 30, color: '#fff'}}>
                        Bebidas
                    </Text>
                    <Text style={{fontSize: 20, color: '#fff'}}>
                        20 productos
                    </Text>
                </View>
                <View style={styles.container}>
                    {products.map((p, index)=>
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
                                title='Comprar'
                                onPress={() => handleSelectProds(p.productId)}
                                />
                        </View>
                    )}
                </View>
            </ScrollView>
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
        borderColor: '#0000ff',
        borderWidth: contains ? 2 : 1,
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
