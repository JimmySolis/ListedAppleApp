import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function landingScreen({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('SignUp')
  }
  const pressHandlerTwo = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Listed</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Sign Up' onPress={pressHandler} color='#ffffff'/>
        </View>
        <View style={styles.button}>
          <Button title='Login' onPress={pressHandlerTwo} color='#ffffff'/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0088cc'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginBottom: 40
  },
  button: {
    margin: 10,
    borderRadius: 25,
    backgroundColor: '#0088cc'
  }
});