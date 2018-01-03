import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListView/ListView';

const PlaceList = props => {
    return (
        <FlatList 
            style={styles.listContainer}
            data = {props.places}
            renderItem= {({item}) => (
                <ListItem
                    placeName={item.name}
                    placeImage = {item.image}
                    deleteItem={() => props.onItemSelected(item.key)} />
            )}
        >
        </FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default PlaceList;