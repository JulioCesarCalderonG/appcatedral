import { createStackNavigator } from '@react-navigation/stack';
import CategoriaScreen from '../screen/CategoriaScreen';
import MinisterioScreen from '../screen/MinisterioScreen';
import IniciacionScreen from '../screen/IniciacionScreen';
import OracionScreen from '../screen/OracionScreen';

const Stack = createStackNavigator();

const StackNavigation =()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        initialRouteName='Categoria'
    >
      <Stack.Screen name="Categoria" component={CategoriaScreen} />
      <Stack.Screen name="Ministerio" component={MinisterioScreen} />
      <Stack.Screen name="Iniciacion" component={IniciacionScreen} />
      <Stack.Screen name="Oracion" component={OracionScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;