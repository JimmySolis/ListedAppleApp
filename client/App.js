import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Alert, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title='Click me' 
      onPress={() => Alert.prompt("Name", "What is your name?", text => console.log(text) )}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
