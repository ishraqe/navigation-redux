import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import { CustomButton, Input } from "../../component/common";
import tabScreens from '../MainTab/startMainTab';

class Login extends Component {

    loginHandler() {
        tabScreens();
    }


    render() {
        return (
            <KeyboardAvoidingView
                style={{flex: 1}}
            >
                <View style={{ marginTop: 20, flex: 1, backgroundColor: '#fff' }}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../../assets/loginIcon.png')}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                            secureTextEntry={false}
                            iconName={'md-mail'}
                            placeholder={'E-mail'}
                            style={styles.emailStyle}
                            returnKeyType={'next'}
                            keyboardType='email-address'
                            autoCorrect={false}
                        />
                        <Input
                            secureTextEntry={true}
                            iconName={'md-lock'}
                            placeholder={'password'}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            onPress={this.loginHandler}
                        >
                            Login
                        </CustomButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 2,
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: '70%',
        height: '100%'
    },
    inputContainer:{
        flex: 1,
        marginTop: 20
    }
});

export default Login;