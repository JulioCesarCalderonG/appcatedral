import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions,ScrollView,TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';
import { Cancionero, ResultCancioneros } from '../interface/cancioner.inteface';
import vapApi from '../api/apiVap';

const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'Cancionero'> { };



const CancioneroScreen = ({navigation}:Props) => {

    const [listCancionero, setListCancionero] = useState<Cancionero[]>([
        {
            estado:1,
            id:1,
            logo:'',
            nombre:''
        }
    ])

    const mostrarCancioneros =async () => {
        try {
            const resp = await vapApi.get<ResultCancioneros>('/cancionero',{params:{
                estado:'1'
            }});
            setListCancionero(
                resp.data.cancionero
            )
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
      mostrarCancioneros();
    }, [])
    
    

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
                                    onPress={()=>navigation.navigate('TipoCancionero',{id:resp.id,title:resp.nombre})}
                                >
                                    <View
                                        style={styles.containerImage}
                                    >
                                        <Image
                                            style={styles.iconoLiturgia}
                                            source={{uri:`http://192.168.1.34:4000/api/cancionero/imagen/${resp.logo}`}}
                                        />
                                    </View>
                                    <View
                                        style={styles.containerTextLit}
                                    >
                                        <Text style={styles.textLiturgia}>{resp.nombre}</Text>
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
        width: '20%',
        left:5
    },
    iconoLiturgia: {
        width: 40,
        height: 40,
    },
    containerTextLit: {
        width: '80%',
        left:5
    },
    textLiturgia: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Chewy-Regular'
    },
});