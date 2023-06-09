import React from 'react'
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigation';
import {StackScreenProps} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
const {height, width} = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'CapaCancionero'> {}
const CapaCancioneroScreen = ({navigation, route}: Props) => {
    return (
        <View style={styles.container}>
          <View style={styles.containerImagen}>
            <Text style={styles.textTitulo}>{route.params.title.toUpperCase()}</Text>
          </View>
          <View style={{marginTop: height - ((height*98)/100),}}>
            {/* <Text style={
                        styles.textDescripcion
                    }
                >{route.params.descripcion}</Text> */}
    
            <WebView
              style={{
                backgroundColor: 'rgba(0,0,0,0)',
              }}
              originWhitelist={['*']}
              source={{
                html: `${route.params.descripcion} asasaas asasa asasasa asasas`,
              }}
            />
            <Text style={{color: 'rgba(0,0,0,0.0)'}}>
              {`<p style={color:'black';}>hola como estas</p>`}
            </Text>
          </View>
        </View>
      );
}

export default CapaCancioneroScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDFDFF',
      //justifyContent:'center',
      alignItems: 'center',
      width: width,
    },
    containerImagen: {
      flexDirection: 'row',
      marginTop: 30,
    },
    imgTitulo: {
      width: 60,
      height: 50,
    },
    textTitulo: {
      color: 'black',
      marginTop: 20,
      fontFamily: 'AbrilFatface-Regular',
      fontSize: 20,
    },
    containerDescrip: {
      width: width - 90,
      marginTop: 20,
    },
    textDescripcion: {
      color: 'black',
      textAlign: 'center',
      fontFamily: 'GlassAntiqua-Regular',
      fontSize: 16,
    },
  });
  