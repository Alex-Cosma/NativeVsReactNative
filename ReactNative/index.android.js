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

class ReactNative extends Component {
    constructor() {
        super();
        this.onRegionChange = this.onRegionChange.bind(this);
        this.state = {
            markers: [
                {
                    coordinate: {
                        latitude: -34,
                        longitude: 151,
                    },
                    title: 'Sydney',
                    description: 'Marker in Sydney',
                }
            ]
        };
    }

    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    onRegionChange({latitude, longitude, latitudeDelta, longitudeDelta}) {
        let markers = this.state.markers;

        for (let i = 0; i < 20; ++i) {
            markers.push({
                coordinate: {
                    latitude: ReactNative.randomBetween(latitude - latitudeDelta / 2, latitude + latitudeDelta / 2),
                    longitude: ReactNative.randomBetween(longitude - longitudeDelta / 2, longitude + longitudeDelta / 2),
                },
                title: 'testt',
                description: 'test',
            })
        }
        this.setState({markers})
    }

    render() {
        return (
            <View style={styles.container} renderToHardwareTextureAndroid={true}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -34,
                        longitude: 151,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onRegionChangeComplete={this.onRegionChange}
                >
                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker
                            key={i}
                            {...marker}
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
    }
});

AppRegistry.registerComponent('ReactNative', () => ReactNative);
