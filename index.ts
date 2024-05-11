import {AppRegistry} from 'react-native';
import App from './App';
import UserProfile from './src/pages/UserProfile';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => UserProfile);
