import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartScreen from './screens/StartScreen.js';


export default function App() {
  const [newsScreen, setNewsScreen] = useState(false)

  const viewCompleteNew = (info) => {
    setNewsScreen(info);
  };


  return (
    <View style={styles.screen}>
        <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
