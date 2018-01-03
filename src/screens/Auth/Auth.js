import React, {Component} from 'react';
import { View, Text, Button } from "react-native";
import tabScreens from '../MainTab/startMainTab';


class AuthScreen extends Component {


    loginHandler() {
        tabScreens();
    }

    render() {
        return (
            <View>
                <Text>Auth</Text>
                <Button title="Login" onPress = {()=> this.loginHandler()} />
            </View>
        );
    }
}

export default AuthScreen;