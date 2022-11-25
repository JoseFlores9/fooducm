import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../screens/Categories';
import Products from '../screens/Products';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={Categories} />
      <Stack.Screen name="Productos" component={Products} />
    </Stack.Navigator>
  );
}