import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';

import configureStore from './store/reducers/configureReducers';

import AuthScreen from '../src/screens/Auth/Auth';
import FindPlace from './screens/MainTab/TabScreens/FindPlace';
import SharePlace from './screens/MainTab/TabScreens/ShareScreen';
import PlaceDetails from './screens/PlaceDetail/PlaceDetails';
import SideDrawer from './screens/SideDrawer/SideDrawer';
import LoginScreen from './screens/Auth/Login';


const store = configureStore();

Navigation.registerComponent('places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('places.FindPlace', () => FindPlace, store, Provider);
Navigation.registerComponent('places.SharePlace', () => SharePlace, store, Provider);
Navigation.registerComponent('places.placeDetails', () => PlaceDetails, store, Provider);
Navigation.registerComponent('places.SideDrawer', () => SideDrawer, store, Provider);
Navigation.registerComponent('places.LoginScreen', () => LoginScreen, store, Provider);



Navigation.startSingleScreenApp({
    screen: {
        screen: 'places.AuthScreen',
        navigatorStyle: {
            navBarHidden: true
        }
    }
});