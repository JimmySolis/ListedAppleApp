import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import discoveryPage from "./pages/discoveryPage";
import searchPages from "./pages/searchPages";
import profile from './pages/profile';
import userSettings from './pages/userSettings';
import login from './pages/login';
import signUp from './pages/signUp';

const screens ={
    SignUp : {
        screen: signUp
    },
    Login : {
        screen: login
    },
    Home : {
        screen: discoveryPage
    },
    Search : {
        screen: searchPages
    },
    Profile : {
        screen: profile
    },
    Settings : {
        screen: userSettings
    },
  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);