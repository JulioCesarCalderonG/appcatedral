import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const LugaresComponent = () => {

  const lugares = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 2,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 3,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 4,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 5,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 6,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 7,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 8,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 9,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    },
    {
      id: 10,
      name: 'Your Story',
      image: require('../assets/img/imagen.jpg')
    }
  ]

  return (
    <ScrollView
    horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}
    >
      {
        lugares.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log('Hola');
              }}
              >
              <View
                style={{
                  flexDirection: 'column',
                  paddingHorizontal: 8,
                  position: 'relative',
                }}>
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    opacity: data.id == 0 ? 1 : 0.5,
                  }}>
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

export default LugaresComponent