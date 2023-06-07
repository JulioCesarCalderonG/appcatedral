import { createStackNavigator } from '@react-navigation/stack';
import CategoriaScreen from '../screen/CategoriaScreen';
import MinisterioScreen from '../screen/MinisterioScreen';
import IniciacionScreen from '../screen/IniciacionScreen';
import OracionesScreen from '../screen/OracionesScreen';
import TipoOracionScreen from '../screen/TipoOracionScreen';



export type RootStackParams = {
  Categoria: undefined,
  Ministerio:undefined,
  Iniciacion:undefined,
  Oracion:undefined,
  TipoOracion:{
    id:number,
    title:string
  }
}


const Stack = createStackNavigator<RootStackParams>();

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
      <Stack.Screen name="Oracion" component={OracionesScreen} />
      <Stack.Screen name="TipoOracion" component={TipoOracionScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;