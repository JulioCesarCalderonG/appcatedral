import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageSourcePropType,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import { Imagen, Noticia, ResultNoticias } from '../interface/noticia.interface';
import vapApi from '../api/apiVap';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
const PostComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [listNoticia, setListNoticia] = useState<Noticia[]>([
    {
      ano:'',
      descripcion:'',
      estado:1,
      fecha:'',
      id:0,
      subtitulo:'',
      titulo:'',
      imagen:[]
    }
  ]);

  const obtenerDatos =async()=>{
    const resp = await vapApi.get<ResultNoticias>('/noticia/publicacion/noticia');
    setListNoticia(
      resp.data.noticia
    )   
  }
  useEffect(() => {
    obtenerDatos();
  }, [])
  const renderItems = (item: Imagen) => {
    return (
      <View
        style={
          {
            //backgroundColor:'white'
          }
        }>
        <Image
          source={{uri:`http://192.168.1.34:4000/api/noticiaimagen/imagen/${item.nombre}`}}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </View>
    );
  };
  return (
    <View>
      {listNoticia!.map((data, index) => {
        //const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              margin: 10,
              paddingBottom: 30,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
              backgroundColor: 'white',
              borderRadius: 10,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 3,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/img/imagen3.jpg')}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                    {data.titulo}
                  </Text>
                  <Text
                    style={{fontSize: 12, color: 'black'}}>
                    {data.subtitulo}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={(data.imagen)}
                renderItem={({item}: any) => renderItems(item)}
                sliderWidth={350}
                itemWidth={350}
                layout={'tinder'}
                onSnapToItem={(index)=>{
                  setActiveIndex(index)
                }}
              />
              
            </View>

            <View style={{paddingHorizontal: 15, marginTop: 10}}>
              
              <Text
                style={{
                  color: 'black',
                  textAlign:'justify'
                }}>
                {data.descripcion}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PostComponent;
