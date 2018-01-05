import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';


class SideDrawer extends Component {
    render() {
        return(
            <View style={[
                styles.container,
                {width: Dimensions.get('window').width * 0.8}
            ]}>
                <Text>Drawer</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor : 'white',
        paddingTop: 22,
        flex: 1
    }
};


export default SideDrawer;