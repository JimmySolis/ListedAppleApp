import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    console.log(`Logging in with email: ${email} and password: ${password}`);
  } 
  
  const pressHandler = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Button title='Go to back to sign up' onPress={pressHandler}/>
     <View style={styles.container}>
     <Text style={styles.header}>Login</Text>
     <TextInput
       style={styles.input}
       placeholder="Email"
       keyboardType="email-address"
       value={email}
       onChangeText={(text) => setEmail(text)}
     />
     <TextInput
       style={styles.input}
       placeholder="Password"
       secureTextEntry={true}
       value={password}
       onChangeText={(text) => setPassword(text)}
     />
     <Button title="Login" onPress={handleLogin} />
   </View>
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
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});
