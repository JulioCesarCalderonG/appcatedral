import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import PostComponent from '../components/PostComponent';

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBarComponent />
      <ScrollView>
        <PostComponent />
      </ScrollView>
    </View>
  )
}

export default HomeScreen