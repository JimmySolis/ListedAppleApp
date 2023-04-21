import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function signUp({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Login')
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Enter your email'
        />
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder='Enter your name'
        />
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder='Enter your username'
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder='Enter your password'
        />
        <Button title='Sign Up' onPress={() => console.log(email, name, username, password)} />
        <Button title='Go to login' onPress={pressHandler} />
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

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

// export default function signUp({ navigation }) {
//   const pressHandler = () => {
//     navigation.navigate('Login');
//   }

//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Initialize GoogleSignin
//   GoogleSignin.configure({
//     webClientId: '<YOUR_WEB_CLIENT_ID>',
//     offlineAccess: false,
//   });

//   // Google sign-in handler
//   const onGoogleButtonPress = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { idToken, user } = await GoogleSignin.signIn();
//       console.log(idToken, user);
//       // Handle user creation or login with idToken and user object
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Facebook sign-in handler
//   const onFacebookButtonPress = async () => {
//     try {
//       const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
//       if (result.isCancelled) {
//         console.log('User cancelled the login process');
//       } else {
//         const data = await AccessToken.getCurrentAccessToken();
//         if (!data) {
//           console.log('Something went wrong obtaining the user access token');
//         } else {
//           console.log(data.accessToken.toString());
//           // Handle user creation or login with accessToken
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Sign Up</Text>
//       <View>
//         <Text>Email</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={setEmail}
//           value={email}
//           placeholder='Enter your email'
//         />
//         <Text>Name</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={setName}
//           value={name}
//           placeholder='Enter your name'
//         />
//         <Text>Username</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={setUsername}
//           value={username}
//           placeholder='Enter your username'
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={setPassword}
//           value={password}
//           secureTextEntry={true}
//           placeholder='Enter your password'
//         />
//         <Button title='Sign Up' onPress={() => console.log(email, name, username, password)} />
//         <GoogleSigninButton
//           style={styles.googleButton}
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={onGoogleButtonPress}
//         />
//         <LoginButton
//           style={styles.facebookButton}
//           onLoginFinished={(error, result) => {
//             if (error) {
//               console.log('Facebook login error:', error);
//             } else if (result.isCancelled) {
//               console.log('Facebook login cancelled');
//             } else {
//               console.log('Facebook access token:', result);
//               // Handle user creation or login with result.accessToken
//             }
//           }}
//           onLogoutFinished={() => console.log('User logged out from Facebook')}
//         />
//       </View>
//       <Button title='Go to login' onPress={pressHandler}/>
//    </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
// container: {
// flex: 1,
// alignItems: 'center',
// justifyContent: 'center',
// },
// text: {
// fontSize: 20,
// fontWeight: 'bold',
// color: 'black',
// },
// header: {
// fontSize: 24,
// marginBottom: 16,
// },
// input: {
// height: 40,
// width: '80%',
// borderWidth: 1,
// borderColor: 'gray',
// borderRadius: 4,
// padding: 8,
// marginBottom: 16,
// },
// googleButton: {
// width: 192,
// height: 48,
// marginTop: 16,
// },
// facebookButton: {
// width: 192,
// height: 48,
// marginTop: 16,
// },
// });