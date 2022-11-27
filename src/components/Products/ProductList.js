import React, { useContext } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { CartContext } from '../../context/CartContext'

export default function ProductList(props) {

    const { products=[] } = props
    const {selectedProducts, setProducts} = useContext(CartContext)

    const handleSelectProds = (prod) => {
        let temProds = []
        isIn(prod._id)
        if(isIn(prod._id)){
            temProds = selectedProducts.filter(p => p._id !== prod._id)
            setProducts(temProds)
        }
        else{
            temProds = selectedProducts.slice()
            temProds.push(prod)
            setProducts(temProds)
        }
    }

    const isIn = (prodId) => {
        let temp = selectedProducts.filter(p => p._id === prodId)
        if (temp.length === 0) {
            return false
        }
        else {
            return true
        }
    }

    return (
        <View style={styles.container}>
            {products && products.map((p, index)=>
                <View
                    key={index}
                    style={styles.product(index % 2 === 0, isIn(p._id))}
                >
                    <Image
                        source={{uri: p.image}}
                        style={styles.photo}
                    />
                    <Text style={styles.title}>
                        {p.title}
                    </Text>
                    <Text>
                        {p.formatprice}
                    </Text>
                    <Button
                        title={isIn(p._id) ? 'Quitar' : 'Agregar'}
                        onPress={() => handleSelectProds(p)}
                    />
                </View>
            )}
        </View>
    )
}

export const styles = StyleSheet.create({
    photo: {
        width: "80%",
        height: 200
    },
    title: {
        fontSize: 18
    },
    product: (index, contains) => ({
        width: "48%",
        borderRadius: 4,
        borderColor: contains ? '#FF5733' : '#0066cb',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: index ? 0 : "3%",
        marginBottom: 16,
        paddingVertical: 16,
        backgroundColor: "white"
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
