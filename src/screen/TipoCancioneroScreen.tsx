import React,{useState,useEffect} from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation'
import { StackScreenProps } from '@react-navigation/stack';
import { ResultTipoCancioneros, Tipocancionero } from '../interface/tipocancionero.interface';
import vapApi from '../api/apiVap';
interface Props extends StackScreenProps<RootStackParams, 'TipoCancionero'> { };

const {height,width} = Dimensions.get('window');

interface TipoCancionero {
  id: number,
  titulo: string,
  descripcion:string,
  icono: any
}


const TipoCancioneroScreen = ({route,navigation}:Props) => {
    const [listTipo, setListTipo] = useState<Tipocancionero[]>([
      {
        descripcion:'',
        id:0,
        id_cancionero:0,
        logo:'',
        numero:'0',
        subdescripcion:'',
        titulo:''
      }
    ]);

    const mostrarTipoCancionero =async()=>{
      try {
        const resp = await vapApi.get<ResultTipoCancioneros>(`/tipocancionero/cancionero/${route.params.id}`);
        setListTipo(resp.data.tipocancionero);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      mostrarTipoCancionero();
    }, [])
    
    const listTipoCancionero: TipoCancionero[] = [
        {
          id: 1,
          titulo: 'Oraciones básicas',
          icono: require('../assets/img/oracion.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 2,
          titulo: 'Reconciliacion',
          icono: require('../assets/img/libro.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 3,
          titulo: 'Santo Rosario',
          icono: require('../assets/img/nota.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 4,
          titulo: 'Adoracion al Santisimo',
          icono: require('../assets/img/nota.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 5,
          titulo: 'Oraciones básicas',
          icono: require('../assets/img/oracion.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 6,
          titulo: 'Reconciliacion',
          icono: require('../assets/img/libro.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 7,
          titulo: 'Santo Rosario',
          icono: require('../assets/img/nota.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
        {
          id: 8,
          titulo: 'Adoracion al Santisimo',
          icono: require('../assets/img/nota.png'),
          descripcion:'loremloremlorem loremloremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem'
        },
      ]
    
    
      return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{width,height:68, backgroundColor:'#BCECF2', justifyContent:'center'}}>
              <Text style={{
                color:'black',
                left:50,
                fontSize:25,
                fontFamily:'Chewy-Regular'
              }}>{route.params.title}</Text>
            </View>
            <ScrollView style={{
              width: width,
              marginTop:20,
              left:10
            }}>
            {
              listTipo.map((resp, index) => {
    
                return (
    
                  <TouchableOpacity
                    onPress={()=>{
                      navigation.navigate('CapaCancionero',{title:resp.titulo,descripcion:resp.descripcion})
                    }}
                    key={resp.id}
                    style={{
                      flexDirection: 'row',
                      height: 100,
                      backgroundColor: 'white',
                      width: '100%',
                      alignItems: 'center',
                      padding: 10,
                    }}
                    activeOpacity={0.4}
                  >
                    <View style={{
                      width: '20%'
                    }}>
                      <Image source={{uri:`http://192.168.1.34:4000/api/tipocancionero/imagen/${resp.logo}`}} style={{ width: 50, height: 50 }} />
                    </View>
                    <View
                      style={{
                        width: '80%',
                        borderBottomColor:'#BCD2F2',
                        borderBottomWidth:0.5,
                      }}
                    >
                      <Text style={{ color: 'black', fontFamily:'Chewy-Regular', fontSize:18 }}>{resp.titulo} - {resp.numero} </Text>
                      <Text
                        style={{
                          color:'#8492A6',
                          fontSize:13,
                          marginBottom:10,
                          fontFamily:'Cardo-Bold'
                        }}
                      >
                        {resp.subdescripcion.slice(0,100)}
                      </Text>
                    </View>
                  </TouchableOpacity>
    
                )
              })
    
            }
          </ScrollView>
        </View>
      )
}

export default TipoCancioneroScreen