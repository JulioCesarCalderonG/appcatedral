import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import TitleComponent from '../components/TitleComponent';
import LugaresComponent from '../components/LugaresComponent';
import MapaComponent from '../components/MapaComponent';

const UbicanosScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <StatusBarComponent />
      <TitleComponent title='Ubicanos Aqui'/>
      <ScrollView>
      <LugaresComponent/>
      <MapaComponent/>
      </ScrollView>
      
      
    </View>
  )
}

export default UbicanosScreen