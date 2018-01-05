import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import {connect} from 'react-redux';
import PlaceList from '../../../component/PlaceList/PlaceList'



class FindPlace extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawer') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                });
            }
        }
    }

    placeDetailsHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });

        this.props.navigator.push({
            screen: 'places.placeDetails',
            title: selPlace.name,
            passProps: {
                modalPlace: selPlace
            },
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'slide-horizontal',
        });
    }
    render() {
        return (
            <View>
                <PlaceList 
                    places={this.props.places} 
                    onItemSelected= {this.placeDetailsHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlace);