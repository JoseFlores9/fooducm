import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import ProductList from '../components/Products/ProductList'

export default function Products(props) {
    const { catId, catName } = props.route.params
    const urlBase = Platform.OS === "ios" ? "http://localhost:8080/api/products?category="+catId : "http://10.0.2.2:8080/api/products?category="+catId
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(urlBase).then((response) => {
            setProducts(response.data.products)
          });
    },[])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#0066cb', padding: 8}}>
                    <Text style={{fontSize: 30, color: '#fff'}}>
                        {catName}
                    </Text>
                    <Text style={{fontSize: 20, color: '#fff'}}>
                        {`${products.length} Productos`}
                    </Text>
                </View>
                <ProductList products={products} />
            </ScrollView>
        </SafeAreaView>
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
