import { createStackNavigator } from '@react-navigation/stack';
import CategoriaScreen from '../screen/CategoriaScreen';
import MinisterioScreen from '../screen/MinisterioScreen';
import IniciacionScreen from '../screen/IniciacionScreen';
import OracionesScreen from '../screen/OracionesScreen';
import TipoOracionScreen from '../screen/TipoOracionScreen';
import CapaOracionScreen from '../screen/CapaOracionScreen';
import LiturgiaScreen from '../screen/LiturgiaScreen';
import CapaLiturgiaScreen from '../screen/CapaLiturgiaScreen';
import CancioneroScreen from '../screen/CancioneroScreen';
import TipoCancioneroScreen from '../screen/TipoCancioneroScreen';
import CapaCancioneroScreen from '../screen/CapaCancioneroScreen';
import DirectorioScreen from '../screen/DirectorioScreen';
import TipoDirectorio from '../screen/TipoDirectorio';



export type RootStackParams = {
  Categoria: undefined,
  Ministerio:undefined,
  Iniciacion:undefined,
  Oracion:undefined,
  TipoOracion:{
    id:number,
    title:string
  },
  CapaOracion:{
    title:string,
    descripcion:string
  },
  Liturgia:undefined,
  CapaLiturgia:{
    id:number,
    fecha:string
  },
  Cancionero:undefined,
  TipoCancionero:{
    id:number,
    title:string
  },
  CapaCancionero:{
    title:string,
    descripcion:string
  },
  Directorio:undefined,
  TipoDirectorio:{
    id:number,
    title:string
  },
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
      <Stack.Screen name="CapaOracion" component={CapaOracionScreen} />
      <Stack.Screen name="Liturgia" component={LiturgiaScreen} />
      <Stack.Screen name="CapaLiturgia" component={CapaLiturgiaScreen} />
      <Stack.Screen name="Cancionero" component={CancioneroScreen} />
      <Stack.Screen name="TipoCancionero" component={TipoCancioneroScreen} />
      <Stack.Screen name="CapaCancionero" component={CapaCancioneroScreen} />
      <Stack.Screen name="Directorio" component={DirectorioScreen} />
      <Stack.Screen name="TipoDirectorio" component={TipoDirectorio} />
    </Stack.Navigator>
  );
}

export default StackNavigation;