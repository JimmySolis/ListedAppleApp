import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function discoveryPage({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('Profile')
  }

  const pressHandlerSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title='Go to Profile' onPress={pressHandler}/>
      <Button title='Go to Search' onPress={pressHandlerSearch}/>
      

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
