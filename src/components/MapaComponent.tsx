import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
const {height} = Dimensions.get('window');
const MapaComponent = () => {
  return (
    <View style={{width:500,height}}>
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: -8.388828,
        longitude: -74.543266,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      
    </MapView>
  </View>
  )
}

export default MapaComponent