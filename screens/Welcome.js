import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

import MapView from 'react-native-maps'
import Permissions from 'expo-permissions'

export default class App extends React.Component {
    state={
        latitude: null,
        longitude: null
    }
    async componentDidMount() {
        const {status} = await Permissions.getAsync(Permissions.LOCATION)
    }
    render(){
        return(
            <MapView
            style={{flex: 1}}
            initialRegion={{
                latitude: 37, 
                longitude: -122,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
                </MapView>
        )
    }
}