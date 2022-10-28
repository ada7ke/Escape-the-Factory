import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useState } from 'react';

function MenuScreen({navigation}) {
  const [isLandscape, setOrientation] = useState(true);

  async function tiltScreen() {
    if (isLandscape == true) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }
    else if (isLandscape == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }

  function toggleOrientation() {
    setOrientation(!isLandscape);
    tiltScreen();
  }
  
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground style={{width:900, height: 300}} source={require('./homescreen.png')}>
        <Button title="Rotate Screen" onPress={toggleOrientation} />
        <Button
          title="Play"
          onPress={() => navigation.navigate('Home')}
        />
      </ImageBackground>
      
    </View>
  )
}

export default MenuScreen;