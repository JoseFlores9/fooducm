import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { CatProd } from '../screens/CatProd';
import { BuyCart } from '../screens/BuyCart';
import { AuthContext } from '../context/AuthContext';
import Login from '../screens/Login'

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    const {Auth, setUser} = useContext(AuthContext)
    return (
        Auth ?
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Categoria" component={CatProd} options={{ headerShown: false }}/>
                <Tab.Screen name="Carrito de compras" component={BuyCart} />
            </Tab.Navigator>
        :
            <Login />
    );
}