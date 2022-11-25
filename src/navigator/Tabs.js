import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../screens/Products';
import Home from '../screens/Home'
import Categories from '../screens/Categories';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Categorias" component={Categories} />
    </Tab.Navigator>
  );
}