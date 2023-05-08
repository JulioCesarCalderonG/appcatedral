import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoticiasScreen from '../screen/NoticiasScreen';
import UbicanosScreen from '../screen/UbicanosScreen';
import CategoriaScreen from '../screen/CategoriaScreen';

const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Tab.Screen name="Noticias" component={NoticiasScreen} />
      <Tab.Screen name="Ubicanos" component={UbicanosScreen} />
      <Tab.Screen name="Categoria" component={CategoriaScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;