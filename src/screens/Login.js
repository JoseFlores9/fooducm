import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Login() {
    return (
        <View
            style={styles.container}
        >
            <Image
                source={{uri: "https://portal.ucm.cl/content/uploads/2019/01/escudo1.png"}}
                style={styles.photo}
            />
            <View>
                <Text
                    style={styles.title}
                >
                    Iniciar Sesión
                </Text>
            </View>
            <TextInput
                style={styles.input}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
            />
            <Button
                title='INGRESAR'
                style={styles.Button}
            />
            <Button
                title='CONTINUAR COMO INVITADO'
                style={styles.Button}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    photo: {
        width: 400,
        height: 400
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        paddingHorizontal: 32
    },
    input: {
        borderRadius: 16,
        borderWidth: 1,
        marginBottom: 16
    },
    loginButton: {
        borderRadius: 8,

    }
})
