import React from 'react'
import { View, Text, StyleSheet, Dimensions,Image, ScrollView } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';


const {height, width} = Dimensions.get('window');

const TipoDirectorio = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerTitulo}>
            <Text style={styles.textTitulo}>La Inmaculada - Catedral</Text>
        </View>
        <View style={styles.containerSecre}>
          <Text style={styles.textSecre}>Horario de atencion en secretaria</Text>
          <View style={styles.turnoSecreCont}>
            <Text style={styles.horaSecre}>Mañanas : </Text>
            <Text style={styles.horaSecre}>Lunes a Sábado de 09:00 a.m  -  12:00 m.d</Text>{/* 
            <Text style={styles.horaSecre}>Tarde     : Lunes a Viernes de 03:00 p.m  -  07:00 p.m</Text> */}
          </View>
          <View style={styles.turnoSecreCont}>
            <Text style={styles.horaSecre}>Tarde      : </Text>
            <Text style={styles.horaSecre}>Lunes a Viernes de 03:00 p.m  -  07:00 p.m</Text>
          </View>
        </View>
        <View style={styles.containerSecre}>
          <Text style={styles.textSecre}>Horario de misas</Text>
          <View style={styles.turnoSecreCont}>
            <Text style={styles.horaSecre}>Mañanas : </Text>
            <Text style={styles.horaSecre}>Lunes a Sábado de 09:00 a.m  -  12:00 m.d</Text>{/* 
            <Text style={styles.horaSecre}>Tarde     : Lunes a Viernes de 03:00 p.m  -  07:00 p.m</Text> */}
          </View>
          <View style={styles.turnoSecreCont}>
            <Text style={styles.horaSecre}>Tarde      : </Text>
            <Text style={styles.horaSecre}>Lunes a Viernes de 03:00 p.m  -  07:00 p.m</Text>
          </View>
        </View>
        <View style={styles.containerDatos}>
            <Text style={styles.textDatos}>Telefono:		963 852 741</Text>
            <Text style={styles.textDatos}>Dirección:	Jr. Independencia c/s</Text>
        </View>
        <View style={styles.containerImagen}>
            <Image
              source={{uri:'https://res.cloudinary.com/dkxwh94qt/image/upload/v1688750866/Catedral_de_Pucallpa_njyang.jpg'}}
              style={styles.imagenPri}
            />
        </View>
        <View style={styles.containerSocial}>
            <Icon
              name='logo-facebook'
              size={30}
              style={styles.iconSocial}
              
            />
            <Text style={styles.textSocial}>Facebook</Text>
        </View>
    </View>
  )
}

export default TipoDirectorio;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F1FDFF',
        alignItems:'center'
    },
    containerTitulo:{
      backgroundColor:'#BCECF2',
      marginTop:30,
      width:width-(width*35/100),
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
    },
    textTitulo:{
      color:'#47525E',
      fontFamily:'Chewy-Regular',
      fontSize:15
    },
    containerSecre:{
      marginTop:30,
      width:width-40,
    },
    textSecre:{
      color:'#47525E',
      fontFamily:'Cardo-Bold',
      textDecorationLine:'underline'
    },
    turnoSecreCont:{
      left:10,
      width:'75%',
      flexDirection:'row'
    },
    horaSecre:{
      color:'#47525E',
      fontFamily:'Cardo-Regular'
    },
    containerDatos:{
      marginTop:20,
      width:width-40,
      marginBottom:15
    },
    textDatos:{
      color:'#47525E',
      fontFamily:'Cardo-Bold',
      fontSize:15
    },
    containerImagen:{
      width,
      height:200,
      alignItems:'center'
    },
    imagenPri:{
      width:'90%',
      height:'100%',
      borderRadius:10
    },
    containerSocial:{
      flexDirection:'row',
      width,
      marginTop:20,
      alignItems:'center'
    },
    iconSocial:{
      color:'#009CFF',
      left:width-(width*40/100)
    },
    textSocial:{
      color:'#009CFF',
      left:width-(width*40/100),
      fontSize:17,
      fontFamily:'Cardo-Bold'
    }
});