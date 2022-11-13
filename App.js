import React from 'react'
import { listProducts } from './src/mocks/products'
import Products from './src/screens/Products'

export default function App() {
    return (
        <Products products={listProducts}/>
    )
}
