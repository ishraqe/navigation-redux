import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const tabScreens = () => {

    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30),        
    ]).then(source => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Find Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'places.FindPlace', // unique ID registered with Navigation.registerScreen
                    title: 'Find Place', // title of the screen as appears in the nav bar (optional),
                    icon: source[0]
                },
                {
                    label: 'Share Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'places.SharePlace', // unique ID registered with Navigation.registerScreen
                    title: 'Share Place', // title of the screen as appears in the nav bar (optional)
                    icon: source[1]
                }
            ]
        });
    });
};


export default tabScreens;
