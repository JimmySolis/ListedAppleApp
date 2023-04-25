import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  async getProfile() {
    const token = await this.getToken();
    return decode(token);
  }

  async loggedIn() {
    const token = await this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  async isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      await AsyncStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  async getToken() {
    return await AsyncStorage.getItem('id_token');
  }

  async login(idToken, navigation) {
    await AsyncStorage.setItem('id_token', idToken);
    // Replace this line with code to navigate to the home screen of your app
    navigation.navigate("Home")

  }

  async logout(navigation) {
    await AsyncStorage.removeItem('id_token');
    // Replace this line with code to reload the app or navigate to the login screen
    navigation.navigate("LandingScreen")
  }
}

export default new AuthService();