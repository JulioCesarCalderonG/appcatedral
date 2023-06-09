import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoticiasScreen from '../screen/NoticiasScreen';
import UbicanosScreen from '../screen/UbicanosScreen';
import CategoriaScreen from '../screen/CategoriaScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screen/HomeScreen';
import StackNavigation from './StackNavigation';
const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
          tabBarShowLabel:false,
          headerShown:false,
          tabBarStyle:{
            height:50
          },
          tabBarIcon:({color,focused,size})=>{
            let iconName="";
            switch (route.name) {
              case 'Home':
                  iconName='home-outline'
                break;
              case 'Ubicanos':
                  iconName='navigate-circle-outline'
                break;
              case 'Stack':
                  iconName='layers-outline'
                break;
              default:
                break;
            }
            return <Icon name={iconName} size={size+4} color={color}/>
          }
        })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ubicanos" component={UbicanosScreen} />
      <Tab.Screen name="Stack" component={StackNavigation} />
    </Tab.Navigator>
  );
}

export default TabNavigation;