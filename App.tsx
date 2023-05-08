import React from 'react'
import { Text, View } from 'react-native/types'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  )
}

export default App;
