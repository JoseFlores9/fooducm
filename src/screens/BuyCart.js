import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import NumericInput from 'react-native-numeric-input'
import { CartContext } from '../context/CartContext'

export const BuyCart = () => {
    const {selectedProducts, updateQuantity} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let temp = 0
        Object.values(selectedProducts).map((p, index) =>
            temp = temp + p.price * p.quantity
        )
        setTotal(temp)
    },[selectedProducts])
    return (
        <ScrollView>
            <Text style={{marginLeft: 8, fontSize: 18}}>
                {`Precio total: ${total}`}
            </Text>
            {Object.values(selectedProducts).map((p, index) =>
                <View key={index} style={styles.prodContainer}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={{uri: p.image}}
                            style={styles.photo}
                        />
                        <View style={styles.price}>
                            <Text style={{color: 'white', fontSize: 18}}>
                                {p.formatprice}
                            </Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 18}}>
                        {p.title}
                    </Text>
                    <View>
                        <NumericInput
                            value={p.quantity}
                            onChange={(e) => updateQuantity(p._id, e)}
                            rounded= {true}
                            minValue={1}
                            maxValue={p.stock}
                            totalHeight={40}
                            totalWidth={80}
                        />
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    prodContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    photo: {
        width: 70,
        height: 70
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        backgroundColor: '#0066cb',
        borderRadius: 20,
        paddingVertical: 2,
        paddingHorizontal: 8
    }
})
