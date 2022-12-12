import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ProductList = (props) => {
    const { products=[] } = props
    return (
        <View style={{padding: 16, }}>
            {products.map((prod, index) =>
                <View key={index} style={styles.container}>
                    <Text>
                        {prod.title}
                    </Text>
                    <Text>
                        {`Cantidad: ${prod.quantity}`}
                    </Text>
                    <Text>
                        {`Precio Unitario: ${prod.price}`}
                    </Text>
                </View>
            )}
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A4C4EC",
        marginBottom: 4,
        padding: 4,
    }
})
