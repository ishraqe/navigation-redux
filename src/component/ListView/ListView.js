import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListView = (props) => {
    return (
        <TouchableOpacity onPress={props.deleteItem}>
            <View style={styles.viewStyle}>
                <Image style= {styles.imageStyle} source={props.placeImage} />
                <Text style={styles.textStyle}>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewStyle :{
        width: '100%',
        backgroundColor: '#eee',
        marginBottom: 5,
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 16,
        color: '#000'
    },
    imageStyle :{
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: 8
    }
});

export default ListView;