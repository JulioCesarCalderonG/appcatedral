import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, ScrollView, useWindowDimensions, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'Oracion'> { };
interface Oracion {
  id: number,
  titulo: string,
  icono: any
}

const OracionesScreen = ({navigation}:Props) => {

  const listCategoria: Oracion[] = [
    {
      id: 1,
      titulo: 'Oraciones básicas',
      icono: require('../assets/img/oracion.png')
    },
    {
      id: 2,
      titulo: 'Reconciliacion',
      icono: require('../assets/img/libro.png')
    },
    {
      id: 3,
      titulo: 'Santo Rosario',
      icono: require('../assets/img/nota.png')
    },
    {
      id: 4,
      titulo: 'Adoracion al Santisimo',
      icono: require('../assets/img/nota.png')
    },
  ]


  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <Text style={{ color: 'black', fontFamily:'FrederickatheGreat-Regular', fontSize:45, }}>Oraciones</Text>
        <Text style={{ color: 'black', fontFamily:'Cardo-Bold',width:width-50, textAlign:'center', marginTop:10 }}>Todo lo que sube a Dios en oracion, baja luego a la tierra en bendicion</Text>
      </View>
      <View style={{
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
      }}>
        {
          listCategoria.map((resp, index) => {

            return (

              <TouchableOpacity
                key={resp.id}
                style={{
                  flexDirection: 'row',
                  height: 100,
                  backgroundColor: 'white',
                  width: '85%',
                  alignItems: 'center',
                  padding: 10,
                  marginBottom: 20,
                  borderRadius: 10,
                  borderColor: '#BCD2F2',
                  borderWidth: 1.5,

                }}
                activeOpacity={0.4}
                onPress={()=>{navigation.navigate('TipoOracion',{id:resp.id,title:resp.titulo})}}
              >
                <View style={{
                  width: '30%'
                }}>
                  <Image source={resp.icono} style={{ width: 55, height: 55 }} />
                </View>
                <View
                  style={{
                    width: '70%'
                  }}
                >
                  <Text style={{ color: 'black', fontFamily:'Cardo-Bold', fontSize:16 }}>{resp.titulo}</Text>
                </View>
              </TouchableOpacity>

            )
          })

        }
      </View>



    </ScrollView>
  )
}

export default OracionesScreen