import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import ProductList from '../components/Products/ProductList'

export default function Products(props) {
    const [selectedProds, setSelectedProds] = useState([])
    const urlBase = "http://10.0.2.2:8080/hola"
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(urlBase).then((response) => {
            setProducts(response.data.products)
          });
    },[])

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
                <View style={{backgroundColor: '#0066cb', padding: 8}}>
                    <Text style={{fontSize: 30, color: '#fff'}}>
                        Bebidas
                    </Text>
                    <Text style={{fontSize: 20, color: '#fff'}}>
                        20 productos
                    </Text>
                </View>
                <ProductList products={products} handleSelectProds={handleSelectProds} selectedProds={selectedProds}/>
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
