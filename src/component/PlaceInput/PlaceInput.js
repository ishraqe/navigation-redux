import React, {Component} from 'react';
import { Button, Text, TextInput, View, StyleSheet} from 'react-native';
import { Keyboard } from 'react-native'



class PlaceInput extends Component {

    state = {
        placeName: ""
    };

    inputTextChange = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
        this.setState({
            placeName: ''
        });
        Keyboard.dismiss();
    };



    render() {
       return(
           <View style={styles.inputContainer}>
               <TextInput
                   placeholder={'An awesome place !!'}
                   value={this.state.placeName}
                   onChangeText={this.inputTextChange}
                   style={styles.inputStyle}
               />
               <Button
                   title='Add'
                   style={styles.buttonStyle}
                   onPress={this.placeSubmitHandler}
               />
           </View>
       );     
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputStyle: {
        width: '70%'
    },
    buttonStyle: {
        width: '30'
    }
});

export default PlaceInput;