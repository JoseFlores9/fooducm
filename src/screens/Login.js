import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
    const {Auth, setUser} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const urlBase = Platform.OS === "ios" ? "http://localhost:8080/api/auth/login": "http://10.0.2.2:8080/api/auth/login"
    const handleLogin = () => {
        let body = {
            'email': email,
            'password': password
        }
        let json = JSON.stringify(body)
        axios.post(urlBase, json, {headers: {
            'Content-Type': 'application/json'
          }}).then((response) => {
            if(response.status === 200){
                setUser(response.data.token)
            }
        })
    }

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
                    Iniciar SesiÃ³n
                </Text>
            </View>
            <TextInput
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.nativeEvent.text)}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChange={(e) => setPassword(e.nativeEvent.text)}
            />
            <Button
                title='INGRESAR'
                style={styles.Button}
                onPress={() => handleLogin()}
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