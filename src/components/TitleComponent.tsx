import React from 'react'
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const TitleComponent = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
                marginTop: 10
            }}
        >
            <Text style={{ fontFamily: 'Lobster-Regular', color: 'black', fontSize: 20, fontWeight: '500' }}>Catedral de Pucallpa</Text>
        </View>
    )
}

export default TitleComponent