import * as React from 'react';
import {Button, View, Image, Text, ImageBackground} from 'react-native';

function HomeScreen({navigation}) {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('./homescreen.png')} />
      <Button
        title="Play"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>How to play instructions</Text>
    </View>
  )
}

export default HomeScreen;