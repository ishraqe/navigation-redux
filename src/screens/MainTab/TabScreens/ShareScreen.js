import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { add_place } from "../../../store/actions/index";
import PlaceInput from "../../../component/PlaceInput/PlaceInput";


class ShareScreen extends Component {
    onItemAdded = placename => {
        this.props.onAddedPlace(placename);
    }
    
    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.onItemAdded} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPlace: (placename) => dispatch(add_place(placename))
    };
};

export default connect(null, mapDispatchToProps)(ShareScreen);