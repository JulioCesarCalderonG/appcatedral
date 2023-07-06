import { StackScreenProps } from '@react-navigation/stack';
import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import { useForm } from '../hooks/useForm';
const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'Liturgia'> { };

interface Liturgia {
    id: number,
    titulo: string,
    icono: any
}

const LiturgiaScreen = ({ navigation }: Props) => {

    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState(0);
    const [ano, setAno] = useState(0);

    useEffect(() => {
      const tmes = new Date().getMonth()+1
      const tano = new Date().getFullYear();
      const tdia = new Date().getDate();
      setDia(tdia);
      setMes(tmes);
      setAno(tano);
    }, [])
    

    const funDia=(tipo:string)=>{
        if (tipo==='1') {
            if (dia<31) {
                setDia(dia+1)
            }
        }else if (tipo==='2') {
            if (dia>0) {
                setDia(dia-1)
            }
        }
    }
    const funMes=(tipo:string)=>{
        if (tipo==='1') {
            if (mes<12) {
                setMes(mes+1)
            }
        }else if (tipo==='2') {
            if (mes>0) {
                setMes(mes-1)
            }
        }
    }
    const funAno=(tipo:string)=>{
        if (tipo==='1') {
            setAno(ano+1)
        }else if (tipo==='2') {
            if (ano>0) {
                setAno(ano-1)
            }
        }
    }

    const listLiturgia: Liturgia[] = [
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
    ]
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Liturgia</Text>
            </View>
            <View style={styles.containerBotones}>
                <ScrollView style={{flex:1}}>
                    {
                        listLiturgia.map((resp, index) => {
                            return (
                                <TouchableOpacity
                                    key={resp.id}
                                    style={styles.botonLiturgia}
                                    activeOpacity={0.6}
                                    onPress={()=>navigation.navigate('CapaLiturgia',{id:resp.id,fecha:`${ano}-${mes}-${dia}`})}
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

            <View style={styles.containerBtnFecha}>
                <View style={styles.containerFecha}>
                    <TouchableOpacity
                        onPress={()=>{funDia('1')}}
                        style={styles.btnSuma}
                    >
                        <Text style={{color:'black'}}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.textNumero}>{dia}</Text>
                    <TouchableOpacity
                        onPress={()=>funDia('2')}
                        style={styles.btnResta}
                    >
                        <Text style={{color:'black'}}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerFecha}>
                    <TouchableOpacity
                        onPress={()=>{funMes('1')}}
                        style={styles.btnSuma}
                    >
                        <Text style={{color:'black'}}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.textNumero}>{mes}</Text>
                    <TouchableOpacity
                        onPress={()=>{funMes('2')}}
                        style={styles.btnResta}
                    >
                        <Text style={{color:'black'}}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerFecha}>
                    <TouchableOpacity
                        onPress={()=>{funAno('1')}}
                        style={styles.btnSuma}
                    >
                        <Text style={{color:'black'}}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.textNumero}>{ano}</Text>
                    <TouchableOpacity
                        onPress={()=>{funAno('2')}}
                        style={styles.btnResta}
                    >
                        <Text style={{color:'black'}}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LiturgiaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerTitulo: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    titulo: {
        color: 'black',
        fontFamily: 'FrederickatheGreat-Regular',
        fontSize: 45
    },
    containerBotones: {
        width,
        height:height-(height*60/100),
        padding: 20,
        marginTop: 15,
    },
    botonLiturgia: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#BCD2F2',
        borderWidth: 2,
        padding: 20,
        marginBottom: 10
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
    containerBtnFecha:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    containerFecha:{
        backgroundColor:'#BCECF2',
        borderWidth:1,
        alignItems:'center',
        borderRadius:10,
        margin:5
    },
    btnSuma:{
        width:60,
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding:15,
        alignItems:'center'
    },
    textNumero:{
        color:'black',
        padding:10
    },
    btnResta:{
        width:60,
        borderBottomColor:'black',
        borderTopWidth:1,
        padding:15,
        alignItems:'center'
    }
});