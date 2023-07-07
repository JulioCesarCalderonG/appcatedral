import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const TipoDirectorio = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Hola mundo</Text>
        </View>
    </View>
  )
}

export default TipoDirectorio;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F1FDFF'
    }
});