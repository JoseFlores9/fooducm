import React from 'react'
import { Button, View } from 'react-native'

export const DeleteButton = (props) => {
    const {deleteProduct, prodId}= props
    return (
            <Button
                title='Eliminar'
                onPress={()=> deleteProduct(prodId)}
            />
    )
}
