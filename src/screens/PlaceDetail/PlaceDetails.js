import React, {Component} from 'react';
import {Image, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import {delete_place } from '../../store/actions/index'

class PlaceDetail extends Component{

    deletePlaceHandler = () => {
        this.props.onDeletePlace(this.props.modalPlace.key);
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={Styles.Container}>
                <View>
                    <Image source={this.props.modalPlace.image} style={Styles.imageStyle} />
                    <Text style={Styles.textStyle}>{this.props.modalPlace.name}</Text>
                </View>
                <View style={Styles.buttonStyle}>
                    <View>
                        <TouchableOpacity onPress={this.deletePlaceHandler} >
                            <Icon
                                size={30}
                                color='#900'
                                name='ios-trash'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const Styles = StyleSheet.create({
    Container:{
        margin: 22,
        flex:1
    },
    imageStyle:{
        height: 300,
        width: '100%'
    },
    textStyle:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    buttonStyle:{
        flex: 1,
        flexDirection: 'row',
        marginTop:20,
        marginLeft: 100,
        marginRight: 100,
        justifyContent: 'space-between'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace : key => dispatch(delete_place(key)) 
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);