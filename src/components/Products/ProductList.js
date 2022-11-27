import React, { useContext } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { CartContext } from '../../context/CartContext'

export default function ProductList(props) {

    const { products=[] } = props
    const {selectedProducts, setProducts} = useContext(CartContext)

    const handleSelectProds = (prod) => {
        let temProds = {...selectedProducts}
        isIn(prod._id)
        if(isIn(prod._id)){
            let id = prod._id
            delete temProds[id]
            setProducts(temProds)
        }
        else{
            temProds[prod._id] = prod
            setProducts(temProds)
        }
    }

    const isIn = (prodId) => {
        return selectedProducts[prodId] ? true : false
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
                        onPress={() => handleSelectProds({...p, quantity: 1})}
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
