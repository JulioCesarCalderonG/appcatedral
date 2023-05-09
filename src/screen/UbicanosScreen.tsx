import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import TitleComponent from '../components/TitleComponent';
import LugaresComponent from '../components/LugaresComponent';

const UbicanosScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <StatusBarComponent />
      <TitleComponent />
      
      <ScrollView>
      <LugaresComponent/>
      <Text style={{color:'black'}}>Hola mundo</Text>
      </ScrollView>
      
    </View>
  )
}

export default UbicanosScreen