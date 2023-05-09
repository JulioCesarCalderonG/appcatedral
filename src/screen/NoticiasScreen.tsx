import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import TitleComponent from '../components/TitleComponent';
import PostComponent from '../components/PostComponent';
const NoticiasScreen = () => {
  
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBarComponent />
      <TitleComponent />
      <ScrollView>
        <PostComponent />
        {/* <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View> */}
      </ScrollView>
    </View>
  
  );
};

export default NoticiasScreen;
