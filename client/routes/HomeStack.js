import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import discoveryPage from "./pages/discoveryPage";
import searchPages from "./pages/searchPages";
import profile from './pages/profile';
import userSettings from './pages/userSettings';
import login from './pages/login';
import signUp from './pages/signUp';
import landingScreen from './pages/landingScreen';
import intro from './pages/intro';

const screens ={
    LandingScreen : {
        screen: landingScreen
    },
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
    Intro : {
        screen: intro
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);