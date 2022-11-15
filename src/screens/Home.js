import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryView from '../components/Home/CategoryView'
import TopSection from '../components/Home/TopSection'
import ProductList from '../components/Products/ProductList'
import { listCategories } from '../mocks/products'

export default function Home() {
    const urlBase = "http://10.0.2.2:8080/hola"
    const [products, setProducts] = useState([])
    const [selectedProds, setSelectedProds] = useState([])

    useEffect(() => {
        axios.get(urlBase).then((response) => {
            setProducts(response.data.products)
          });
    },[])
    return (
        <ScrollView style={{backgroundColor: '#DDEAE9'}}>
            <TopSection />
            <CategoryView categories={listCategories} />
            <View
                style={{marginTop: 30, paddingHorizontal: 8}}
            >
                <View
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                >
                    <Text style={styles.tittle}>
                        Recomendados
                    </Text>
                    <Text>
                        Ver Todos
                    </Text>
                </View>
                <ProductList products={products} selectedProds={selectedProds}/>
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    tittle: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})


