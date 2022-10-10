import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useState } from 'react';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
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

  return (
    <View style={styles.container}>
      <Button title="Rotate Screen" onPress={toggleOrientation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
