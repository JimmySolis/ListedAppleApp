import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function profile({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('Home')
  }

  const pressHandlerSettings = () => {
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title='Go to Home' onPress={pressHandler}/>
      <Button title='Go to Settings' onPress={pressHandlerSettings}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
