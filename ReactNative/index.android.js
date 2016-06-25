/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const markers = [...new Array(10).keys()].map(m => ({
    coordinate: {
        latitude: getRandomArbitrary(0, 90),
        longitude: getRandomArbitrary(-100, 100),
    },
    title: 'testt',
    description: 'test',
}));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class ReactNative extends Component {
    constructor() {
        super();
        this.onRegionChange = this.onRegionChange.bind(this);
        this.state = {
            markers: []
        };
    }

    onRegionChange({latitude, longitude, latitudeDelta, longitudeDelta}) {
        console.log(latitude, longitude, this.state);
        this.setState({
            markers: [...new Array(10).keys()].map(() => ({
                coordinate: {
                    latitude: getRandomArbitrary(latitude - latitudeDelta/2, latitude + latitudeDelta/2),
                    longitude: getRandomArbitrary(longitude - longitudeDelta/2, longitude + longitudeDelta/2),
                },
                title: 'testt',
                description: 'test',
            }))
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onRegionChangeComplete={this.onRegionChange}
                >
                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker
                            key={i}
                            coordinate={marker.coordinate}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactNative', () => ReactNative);
