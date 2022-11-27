import React, { createContext, useReducer } from "react"
import { cartReducer } from "./cartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [selectedProducts, dispatch] = useReducer(cartReducer, {})
    const setProducts = (prods) => {
        dispatch({type: 'add', payload: prods})
    }
    const updateQuantity = (id, value) => {
        dispatch({type: 'update', payload: {'id': id, 'value': value}})
    }
    return(
        <CartContext.Provider value={{
            selectedProducts,
            setProducts,
            updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}