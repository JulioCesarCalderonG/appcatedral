import React, {useState} from 'react';
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
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
const PostComponent = () => {
  const postInfo = [
    {
      postTitle: 'Titulo',
      subtitle:'Subtitulo',
      postPersonImage: require('../assets/img/imagen.jpg'),
      postImage: require('../assets/img/imagen.jpg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'Titulo',
      subtitle:'Subtitulo',
      postPersonImage: require('../assets/img/imagen.jpg'),
      postImage: require('../assets/img/imagen.jpg'),
      likes: 764,
      isLiked: false,
    },
    {
      postTitle: 'Titulo',
      subtitle:'Subtitulo',
      postPersonImage: require('../assets/img/imagen.jpg'),
      postImage: require('../assets/img/imagen.jpg'),
      likes: 763,
      isLiked: false,
    },
    {
      postTitle: 'Titulo',
      subtitle:'Subtitulo',
      postPersonImage: require('../assets/img/imagen.jpg'),
      postImage: require('../assets/img/imagen.jpg'),
      likes: 762,
      isLiked: false,
    },
    {
      postTitle: 'Titulo',
      subtitle:'Subtitulo',
      postPersonImage: require('../assets/img/imagen.jpg'),
      postImage: require('../assets/img/imagen.jpg'),
      likes: 761,
      isLiked: false,
    },
  ];
  const items: Slide[] = [
    {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/img/imagen.jpg'),
    },
    {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/img/imagen.jpg'),
    },
    {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/img/imagen.jpg'),
    },
  ];
  const renderItems = (item: Slide) => {
    return (
      <View
        style={
          {
            //backgroundColor:'white'
          }
        }>
        <Image
          source={item.img}
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
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
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
                    {data.postTitle}
                  </Text>
                  <Text
                    style={{fontSize: 12, color: 'black'}}>
                    {data.subtitle}
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
                data={items}
                renderItem={({item}: any) => renderItems(item)}
                sliderWidth={350}
                itemWidth={350}
                layout="default"
              />
            </View>

            <View style={{paddingHorizontal: 15, marginTop: 10}}>
              
              <Text
                style={{
                  color: 'black',
                  textAlign:'justify'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                molestiae repudiandae ex veritatis eum sapiente omnis fugiat
                aperiam. Aliquid, quo. Natus repellendus tenetur ex esse nihil.
                Eligendi voluptatum eos quae?
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PostComponent;
