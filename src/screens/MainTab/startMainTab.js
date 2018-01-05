import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const tabScreens = () => {

    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30),
        Icon.getImageSource('ios-menu', 30)        
    ]).then(source => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Find Place', 
                    screen: 'places.FindPlace',
                    title: 'Find Place',
                    icon: source[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon : source[2],
                                title : 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    label: 'Share Place', 
                    screen: 'places.SharePlace', 
                    title: 'Share Place',
                    icon: source[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: source[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: { 
                    screen: 'places.SideDrawer'
                }
            }
        });
    });
};


export default tabScreens;
