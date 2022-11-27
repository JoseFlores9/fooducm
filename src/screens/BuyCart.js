import React, { useContext } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import NumericInput from 'react-native-numeric-input'
import { CartContext } from '../context/CartContext'

export const BuyCart = () => {
    const {selectedProducts} = useContext(CartContext)
    // const quantities = selectedProducts.filter(p => p).map(p => {"id"; p._id})
    // console.log(quantities)
    return (
        <ScrollView>
            {selectedProducts.map((p, index) =>
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
                            onChange={(e) => (e)}
                            rounded= {true}
                            minValue={0}
                            maxValue={p.stock}
                            totalHeight={40}
                            totalWidth={80}
                        />
                    </View>
                    <Button
                    />
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
