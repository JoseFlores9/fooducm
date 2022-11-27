import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import CategoriesList from '../components/Categories/CategoriesList'


export default function Categories(props) {
    const { navigation } = props
    const [categories, setCategories] = useState([])
    const urlBase = Platform.OS === "ios" ? "http://localhost:8080/api/categories" : "http://10.0.2.2:8080/api/categories"
    useEffect(() => {
        axios.get(urlBase).then((response) => {
            setCategories(response.data.categories)
          });
    },[])

    return (
        <SafeAreaView>
            <CategoriesList categories={categories} navigation={navigation}/>
        </SafeAreaView>
    )
}
