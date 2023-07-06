import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import {WebView} from 'react-native-webview';
const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'CapaLiturgia'> { };

const CapaLiturgiaScreen = ({navigation,route}:Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerTitulos}>
            <View style={styles.containerFecha}>
                <Text style={styles.fecha}>Jueves, 23 de Setiembre del 2021</Text>
            </View>
            <Text style={styles.titulo}>Liturgia de la Palabra</Text>
            <View
                style={styles.containerSubTitulo}
            >
            <Text style={styles.subTitulo}>Vigésimo quinta semana del Tiempo Ordinario - Año impar</Text>
            </View>
            <View style={styles.separador}></View>
        </View>
        <View style={{marginTop: height - ((height*98)/100)}}>
        <WebView
          style={{
            backgroundColor: 'rgba(0,0,0,0)',
          }}
          originWhitelist={['*']}
          source={{
            html: `hola como estas hola como estas hola como estas hola como estas hola como estas hola co como estas hola como estas hola como estas`,
          }}
        />
        <Text style={{color: 'rgba(0,0,0,0.0)'}}>
          {`<p style={color:'black';}>hola como estassss</p>`}
        </Text>
        </View>
    </View>
  )
}

export default CapaLiturgiaScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#EDFDFF'
    },
    containerTitulos:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    containerFecha:{
        padding:20,
        backgroundColor:'#0AA9BD',
        borderRadius:10,
        borderColor:'#8492A6',
        borderWidth:1
    },
    fecha:{
        color:'#47525E',
        fontFamily:'Chewy-Regular'
    },
    titulo:{
        color:'#000000',
        fontFamily:'Chewy-Regular',
        fontSize:28,
        marginTop:18
    },
    containerSubTitulo:{
        width:'90%',
        marginTop:4
    },
    subTitulo:{
        color:'#47525E',
        fontSize:10,
        fontWeight:'500'
    },
    separador:{
        width:width-50,
        borderWidth:1,
        borderColor:'#24B0C2',
        backgroundColor:'#24B0C2',
        marginTop:5
    }
});