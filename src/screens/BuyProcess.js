import axios from 'axios'
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

export const BuyProcess = (props) => {
    const { navigation } = props
    const { Auth } = useContext(AuthContext)
    const {selectedProducts, setProducts} = useContext(CartContext)
    const urlBase = Platform.OS === "ios" ? "http://localhost:8080/api/buy" : "http://10.0.2.2:8080/api/buy"

    const handleBuy = () => {
        let compra = []
        let total = 0
        let newDate = Date().toLocaleString("es-ES", {timeZone: "America/Santiago"})
        Object.values(selectedProducts).map((prod, index) => {
            total += (prod.price * prod.quantity)
            compra.push({
                id: prod._id,
                quantity: prod.quantity
            })
        })
        body = {
            products: compra,
            total: total,
            buy_date: newDate
        }
        let json = JSON.stringify(body)
        axios.post(urlBase, json, {headers: {
            'Content-Type': 'application/json',
            'f-token': Auth
          }}).then((response) => {
            setProducts({})
            navigation.pop()
            navigation.navigate('Detalle', {
                id: response.data.id
            })
          })
    }

    return (
        <View style={{padding: 16}}>
            <Text style={{fontSize: 20}}>
                Webpay
            </Text>
            <View style={{width: "100%", paddingTop: 16}}>
                <TouchableHighlight
                    onPress={() => handleBuy()}
                    >
                    <Image
                        source={{uri: "https://www.enlanubelab.cl/wp-content/uploads/2016/02/webpay-plus-integracion.png"}}
                        style={styles.photo}
                    />
                </TouchableHighlight>
            </View>
            <Text style={{fontSize: 20, marginTop: 20}}>
                Edenred
            </Text>
            <View style={{width: "100%", paddingTop: 16}}>
                <TouchableHighlight
                    onPress={() => handleBuy()}
                    >
                    <Image
                        source={{uri: "https://play-lh.googleusercontent.com/y_AAxZVC_5KwPV6pAgYagFpsQ3yLETjwsn1AuKbK2KdEXLfuB4UFnWkjyziHR5zOPQ"}}
                        style={styles.photo}
                    />
                </TouchableHighlight>
            </View>
        </View>
    )
}
export const styles = StyleSheet.create({
    photo: {
        width: "80%",
        height: 200,
        alignSelf: "center"
    }
})
