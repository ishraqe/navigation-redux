import React from 'react';
import {View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({ label, iconName, value, onChangeText, placeholder, secureTextEntry, returnKeyType, keyboardType, autoCorrect})=>{

    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Icon
                size={30}
                color='#b5b8bc'
                name={iconName}
                style={styles.labelStyle}
            />
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle }
                value={value}
                onChangeText={onChangeText}
                returnKeyType={returnKeyType}
                keyboardType={keyboardType}
                autoCorrect={autoCorrect}
            />
        </View>
    );
};

const styles={
    inputStyle: {
        color: '#000',
        paddingTop:3,
        fontSize:18,
        flex:5,
        width: '80%',
        height: 40
    },
    labelStyle:{
        paddingLeft:20,
        flex:1,
        width: '20%',
        height: 30
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin: 30
    }
}

export {Input }