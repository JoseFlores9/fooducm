import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { CatProd } from '../screens/CatProd';
import { BuyCart } from '../screens/BuyCart';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categoria" component={CatProd} options={{ headerShown: false }}/>
      <Tab.Screen name="Carrito de compras" component={BuyCart} />
    </Tab.Navigator>
  );
}