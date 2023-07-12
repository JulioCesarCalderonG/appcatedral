import React,{useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Directorio, ResultDirectorios } from '../interface/directorio.interface';
import vapApi from '../api/apiVap';

const LugaresComponent = () => {

  const [directorio, setDirectorio] = useState<Directorio[]>([
    {
      direccion:'',
      estado:1,
      id:0,
      imagen:'',
      lat:0,
      lng:0,
      logo:'',
      nombre:'',
      social:'',
      telefono:''
    }
  ]);

  const mostrarDirectorio = async()=>{
    const resp = await vapApi.get<ResultDirectorios>('/directorio',{params:{estado:1}});
    console.log(resp.data.directorio);
    setDirectorio(resp.data.directorio);
  }
  useEffect(() => {
    mostrarDirectorio();
  }, [])
  
  return (
    <ScrollView
    horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}
    >
      {
        directorio.map((data, index) => {
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
                    source={{uri:`http://192.168.1.34:4000/api/directorio/logo/${data.logo}`}}
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
                    color:'black',
                    fontFamily:'Chewy-Regular',
                    fontSize: 10,
                    opacity: data.id == 0 ? 1 : 0.5,
                  }}>
                  {data.nombre.slice(0,11)}
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