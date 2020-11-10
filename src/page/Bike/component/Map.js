import React, {useState} from 'react';
import {View} from 'react-native';
import {MapView} from 'react-native-amap3d';

function Map(props) {
    const [location, setLocation] = useState({
        latitude: 39.706901,
        longitude: 116.397972,
    });

    function onLocation(location) {
        if (location.latitude !== 0 && location.longitude !== 0) {
            setLocation(location);
        }
    }

    return (
        <View style={{flex: 1}}>
            <MapView
                style={{width: '100%', height: '100%'}}
                zoomLevel={15}
                locationInterval={10000}
                distanceFilter={10}
                center={location}
                coordinate={location}
                locationEnabled
                showsCompass
                showsScale
                showsLocationButton
                showsZoomControls
                showsLabels
                showsTraffic
                scrollEnabled
                onLocation={onLocation}
            />
        </View>
    );
}

export default Map;
