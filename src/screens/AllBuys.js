import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const AllBuys = (props) => {
    const { navigation } = props
    const urlBase = Platform.OS === "ios" ? "http://localhost:8080/api/all/buys": "http://10.0.2.2:8080/api/all/buys"
    const { Auth } = useContext(AuthContext)
    const [buys, setBuys] = useState([])
    const getBuys = () => {
        axios.get(urlBase, {headers: {
            'f-token': Auth
        }}).then((response) =>
            setBuys(response.data.buys)
        )
    }

    useFocusEffect(useCallback(() => {
        getBuys()
     }, []))

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Todas las compras
                </Text>
            </View>
            {buys.map((buy, index) =>
                <TouchableHighlight
                    key={index}
                    onPress={ () => navigation.navigate('Detalle' ,{
                        id: buy._id
                    })}
                    activeOpacity={1}
                    style={{marginBottom: 4, width: "100%"}}
                >
                    <View style={styles.buy}>
                            <Text style={styles.content}>
                                {`Id compra: ${buy._id}`}
                            </Text>
                            <Text style={styles.content}>
                                {`Total de Products: ${buy.products.length}`}
                            </Text>
                    </View>
                </TouchableHighlight>
            )
            }
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        padding: 16
    },
    buy: {
        backgroundColor: "#A4C4EC",
        padding: 8,
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
    }
})
