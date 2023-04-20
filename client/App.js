import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Alert, Platform, Text} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/HomeStack';


export default function App() {
  return (
   <Navigator/>
  );
}

