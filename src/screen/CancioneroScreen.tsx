import React from 'react'
import { View, Text, StyleSheet, Dimensions,ScrollView,TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';

const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'Cancionero'> { };

interface Cancionero {
    id: number,
    titulo: string,
    icono: any
}

const CancioneroScreen = ({navigation}:Props) => {

    const listCancionero: Cancionero[] = [
        {
            id: 1,
            titulo: 'Lecturas',
            icono: require('../assets/img/oracion.png')
        },
        {
            id: 2,
            titulo: 'Visperas',
            icono: require('../assets/img/libro.png')
        },
        {
            id: 3,
            titulo: 'Laudes',
            icono: require('../assets/img/nota.png')
        },
        {
            id: 4,
            titulo: 'Lecturas',
            icono: require('../assets/img/oracion.png')
        },
        {
            id: 5,
            titulo: 'Visperas',
            icono: require('../assets/img/libro.png')
        },
        {
            id: 6,
            titulo: 'Laudes',
            icono: require('../assets/img/nota.png')
        },
        {
            id: 7,
            titulo: 'Lecturas',
            icono: require('../assets/img/oracion.png')
        },
        {
            id: 8,
            titulo: 'Visperas',
            icono: require('../assets/img/libro.png')
        },
        {
            id: 9,
            titulo: 'Laudes',
            icono: require('../assets/img/nota.png')
        },
        {
            id: 10,
            titulo: 'Lecturas',
            icono: require('../assets/img/oracion.png')
        },
        {
            id: 11,
            titulo: 'Visperas',
            icono: require('../assets/img/libro.png')
        },
        {
            id: 12,
            titulo: 'Laudes',
            icono: require('../assets/img/nota.png')
        },
    ]

  return (
    <View style={styles.container}>
       <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <Text style={{ color: 'black', fontFamily:'FrederickatheGreat-Regular', fontSize:45, }}>Cancionero</Text>
        <Text style={{ color: 'black', fontFamily:'Cardo-Bold',width:width-50, textAlign:'center', marginTop:10,fontSize:12 }}>
        El canto es un elemento importante en todas las celebraciones litúrgicas, en particular en la Santa Misa Dominical.
        </Text>
      </View>
      
                <ScrollView style={{flex:1, width:width-50}}>
                    {
                        listCancionero.map((resp, index) => {
                            return (
                                <TouchableOpacity
                                    key={resp.id}
                                    style={styles.botonLiturgia}
                                    activeOpacity={0.6}
                                    onPress={()=>navigation.navigate('TipoCancionero',{id:resp.id,title:resp.titulo})}
                                >
                                    <View
                                        style={styles.containerImage}
                                    >
                                        <Image
                                            style={styles.iconoLiturgia}
                                            source={resp.icono}
                                        />
                                    </View>
                                    <View
                                        style={styles.containerTextLit}
                                    >
                                        <Text style={styles.textLiturgia}>{resp.titulo}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
    </View>
  )
}

export default CancioneroScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    containerBotones: {
        width,
        height,
        padding: 20,
        marginTop: 15,
    },
    botonLiturgia: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#BCD2F2',
        borderWidth: 2,
        padding: 5,
        marginBottom: 5
    },
    containerImage: {
        width: '20%'
    },
    iconoLiturgia: {
        width: 40,
        height: 40
    },
    containerTextLit: {
        width: '80%',
    },
    textLiturgia: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Chewy-Regular'
    },
});