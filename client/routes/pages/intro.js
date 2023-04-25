import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function intro({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Intro</Text>
      <Text style={styles.text}>Welcome to Listed!</Text>
      <Text style={styles.text}>Tell us you, we keep these detail secrect.</Text>
      <Text style={styles.text}>Then make lists fill of things you need or want, think of them as gifts.</Text>
      <Text style={styles.text}>Share you profile with friend and family and maybe they will by it for you.</Text>
      <Text style={styles.text}>Could be Chrismas, your birthday or anygiven day.</Text>
      <Text style={styles.text}>So the more specific details we know about you we can garantee that your gifts will be tailored just for you!</Text>
      <Button title='Go to Home' onPress={pressHandler}/>

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
