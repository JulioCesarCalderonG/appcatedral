import React from 'react'
import { View, Text } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import TitleComponent from '../components/TitleComponent';

const CategoriaScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <StatusBarComponent />
      <TitleComponent />
    </View>
  )
}

export default CategoriaScreen