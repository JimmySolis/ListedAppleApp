
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function signUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    symbol: false,
    numeric: false,
  });
  

  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => {
    setPassword(value);
    setRequirements({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      symbol: /[\W_]/.test(value),
      numeric: /\d/.test(value),
    });
  };
  const handleConfirmPasswordChange = (value) => setConfirmPassword(value);

  const isFormComplete = email && password && confirmPassword && Object.values(requirements).every(Boolean);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Listed</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.passwordIconContainer} onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.requirements}>
          <Text> Requirements: </Text>
          <Text style={requirements.length ? styles.requirementCompleted : styles.requirement}>Minimum of 8 characters</Text>
          <Text style={requirements.uppercase ? styles.requirementCompleted : styles.requirement}>At least one upper case letter</Text>
          <Text style={requirements.symbol ? styles.requirementCompleted : styles.requirement}>At least one symbol</Text>
          <Text style={requirements.numeric ? styles.requirementCompleted : styles.requirement}>At least one numeric character</Text>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity style={styles.passwordIconContainer} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Icon name={showConfirmPassword ? 'eye-slash' : 'eye'} size={20} color="#333" />
          </TouchableOpacity>
        </View>
        {password && confirmPassword && password !== confirmPassword ? (
          <Text style={styles.error}>Passwords do not match</Text>
        ) : requirements.length && requirements.uppercase && requirements.symbol && requirements.numeric && confirmPassword === password ? (
          <Text style={styles.success}>Requirements met!</Text>
        ) : null}
        <TouchableOpacity style={[styles.button, isFormComplete && password == confirmPassword  ? {} : styles.disabledButton]} disabled={!isFormComplete}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  requirements: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  requirement: {
    color: '#999',
  },
  requirementCompleted: {
    textDecorationLine: 'line-through',
    color: '#4caf50',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  success: {
    color: '#4caf50',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3B86C6',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
  },
  passwordIconContainer: {
    marginLeft: 10,
  },
});

// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// export default function SignUp () {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [requirementsMet, setRequirementsMet] = useState({
//     length: false,
//     uppercase: false,
//     symbol: false,
//     numeric: false,
//   });

//   const validatePassword = () => {
//     const requirements = {
//       length: password.length >= 8,
//       uppercase: /[A-Z]/.test(password),
//       symbol: /[@$!%*?&]/.test(password),
//       numeric: /\d/.test(password),
//     };

//     setRequirementsMet(requirements);
//   };

//   const handleSignUp = () => {
//     // Your sign up logic here
//     console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{confirmPassword ? 'Sign up' : 'Listed'}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         onBlur={validatePassword}
//       />
//       {requirementsMet.length && requirementsMet.uppercase && requirementsMet.symbol && requirementsMet.numeric ? (
//         <Text style={styles.requirementsMet}>Requirements met!</Text>
//       ) : (
//         <View>
//           <Text style={styles.requirements}>Requirements:</Text>
//           <Text style={[styles.requirement, requirementsMet.length ? styles.requirementMet : null]}>
//             Minimum 8 characters
//           </Text>
//           <Text style={[styles.requirement, requirementsMet.uppercase ? styles.requirementMet : null]}>
//             At least one uppercase letter
//           </Text>
//           <Text style={[styles.requirement, requirementsMet.symbol ? styles.requirementMet : null]}>
//             At least one symbol
//           </Text>
//           <Text style={[styles.requirement, requirementsMet.numeric ? styles.requirementMet : null]}>
//             At least one numeric character
//           </Text>
//         </View>
//       )}
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity
//         style={[styles.button, requirementsMet.length && requirementsMet.uppercase && requirementsMet.symbol && requirementsMet.numeric && { backgroundColor: 'blue' }]}
//         onPress={handleSignUp}
//         disabled={!email || !password || !confirmPassword || !requirementsMet.length || !requirementsMet.uppercase || !requirementsMet.symbol || !requirementsMet.numeric}
//       >
//         <Text style={styles.buttonText}>{confirmPassword ? 'Sign up' : 'Sign up'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 30,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     width: '100%',
//   },
//   requirements: {
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   requirement: {
//     marginVertical: 5,
//     textDecorationLine: 'none',
//   },
//   requirementMet: {
//     textDecorationLine: 'line-through',
//   },
//   requirementsMet: {
//     color: 'green',
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   button: {
//     backgroundColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordValid, setPasswordValid] = useState(false);
//   const [formComplete, setFormComplete] = useState(false); // Initialize formComplete state variable

//   const passwordRequirements = [
//     { label: 'Minimum 8 characters', regex: /.{8,}/ },
//     { label: 'At least one numeric character', regex: /\d+/ },
//     { label: 'At least one capital letter', regex: /[A-Z]+/ },
//     { label: 'At least one symbol', regex: /[\W_]+/ },
//   ];

//   const validatePassword = (password) => {
//     setPasswordValid(passwordRequirements.every((req) => req.regex.test(password)));
//   };

//   const handlePasswordChange = (password) => {
//     setPassword(password);
//     validatePassword(password);
//   };

//   const handleConfirmPasswordChange = (password) => {
//     setConfirmPassword(password);
//   };

//   const passwordsMatch = () => {
//     return password === confirmPassword;
//   };

//   const checkFormComplete = () => {
//     setFormComplete(email && password && confirmPassword && passwordValid && passwordsMatch());
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity style={styles.listedButton}>
//         <Text style={styles.listedButtonText}>{formComplete ? 'SIGN UP' : 'LISTED'}</Text>
//       </TouchableOpacity>
//       <View>
//         <Text>Email</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => {
//             setEmail(text);
//             checkFormComplete();
//           }}
//           value={email}
//           placeholder="Enter your email"
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => {
//             handlePasswordChange(text);
//             checkFormComplete();
//           }}
//           value={password}
//           secureTextEntry={true}
//           placeholder="Enter your password"
//         />
//         {passwordRequirements.map((req, index) => (
//           <View
//             key={index}
//             style={{ flexDirection: 'row', alignItems: 'center' }}
//           >
//             <View
//               style={[
//                 styles.passwordRequirementIndicator,
//                 {
//                   backgroundColor: req.regex.test(password)
//                     ? 'yellow'
//                     : 'red',
//                 },
//               ]}
//             />
//             <Text style={{ marginLeft: 8 }}>{req.label}</Text>
//           </View>
//         ))}
//         <Text>Confirm Password</Text>
//         <TextInput
//           style={[
//             styles.input,
//             { borderColor: passwordsMatch() ? 'gray' : 'red' },
//           ]}
//           onChangeText={(text) => {
//             handleConfirmPasswordChange(text);
//             checkFormComplete();
//           }}
//           value={confirmPassword}
//           secureTextEntry={true}
//           placeholder="Confirm your password"
//         />
//         {!passwordsMatch() && (
//           <Text style={{ color: 'red', marginBottom: 16 }}>
//             Passwords do not match
//           </Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//   },
//   passwordRequirementIndicator: {
//     width: 5,
//     height: 5,
//     borderRadius: 10,
//     marginRight: 8,
//     borderColor: 'black'
//   },
//   signUpButtonContainer: {
//     marginTop: 20,
//     width: '80%',
//     backgroundColor: '#2196F3',
//     borderRadius: 5,
//     padding: 10,
//     alignItems: 'center',
//   },
//   signUpButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   errorContainer: {
//     marginTop: 10,
//     width: '80%',
//     backgroundColor: '#f8d7da',
//     borderColor: '#f5c6cb',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//   },
//   errorText: {
//     color: '#721c24',
//     fontSize: 16,
//   },
// });

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