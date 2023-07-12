import React,{useState,useEffect,useRef} from 'react'
import { Dimensions, Text, View, ScrollView,TouchableOpacity,Image } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { Directorio, ResultDirectorios } from '../interface/directorio.interface';
import vapApi from '../api/apiVap';
import { Location } from '../interface/location.interface';
const {height} = Dimensions.get('window');
const MapaComponent = () => {
  const mapViewRef = useRef<MapView>();
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
    setDirectorio(resp.data.directorio);
  }
  const localizacionCamara =(location:Location)=>{
    mapViewRef.current?.animateCamera({
      center: location
  });
  }
  useEffect(() => {
    mostrarDirectorio();
  }, [])

  return (
    <ScrollView>
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
                localizacionCamara({latitude:data.lat,longitude:data.lng})
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
    <View style={{width:500,height}}>
    <MapView
      ref={(el) => mapViewRef.current = el!}
      style={{flex: 1}}
      initialRegion={{
        latitude: -8.388828,
        longitude: -74.543266,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {directorio.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{latitude:marker.lat,longitude:marker.lng}}
          title={marker.nombre}
          description={`Telefono: ${marker.telefono}`}
          image={{uri: `http://192.168.1.34:4000/api/directorio/logo/${marker.logo}`}}
        />
      ))}
    </MapView>
   </View>
    </ScrollView>
  )
}

export default MapaComponent