import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { ProductList } from '../components/Buy/ProductList'
import { AuthContext } from '../context/AuthContext'

export const Buy = (props) => {
    const { id } = props.route.params
    const urlBase = Platform.OS === "ios" ? "http://localhost:8080/api/buy/": "http://10.0.2.2:8080/api/buy/"
    const [data, setData] = useState()
    const { Auth } = useContext(AuthContext)

    const getBuy = () => {
        axios.get(urlBase + id, {headers: {
            'f-token': Auth
        }}).then((response) =>
            setData(response.data.buyout)
        )
    }
    useEffect(() => {
        getBuy()
    },[])

    return (
        <View style={styles.container}>
            {data &&
                <View style={{width: "100%"}}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Detalle de la Compra
                        </Text>
                    </View>
                    <Text>
                        {`Id de la Compra: ${data.id}`}
                    </Text>
                    <ProductList products={data.products}/>
                    <Text>
                        {`Total: $${data.total}`}
                    </Text>
                    <Text>
                        {`Fecha de compra: ${new Date(data.buy_date).toLocaleDateString('es-ES', {year:"numeric", month:"short", day:"numeric"})}`}
                    </Text>
                    <View style={styles.qrContainer}>
                        <QRCode
                            value={data.id}
                            size={250}
                        />
                    </View>
                </View>
            }
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        padding: 16,
    },
    buy: {
        backgroundColor: "#A4C4EC",
        padding: 8,
        marginBottom: 4,
        width: "100%"
    },
    content: {
        color: "#FFF"
    },
    title: {
        fontSize: 20
    },
    titleContainer: {
        width: "100%",
        height: 30,
        borderBottomWidth: 1,
        marginBottom: 8,
        paddingLeft: 4
    },
    qrContainer: {
        width: "100%",
        alignItems: "center",
        paddingTop: 16
    }
})
