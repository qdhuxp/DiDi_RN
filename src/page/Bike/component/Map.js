import React, {useState, useEffect} from 'react';
import {DeviceEventEmitter, View} from 'react-native';
import {MapView} from 'react-native-amap3d';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';

function Map(props) {
    const [location, setLocation] = useState({
        latitude: 39.706901,
        longitude: 116.397972
    });
    const [locationPermissionDialog, setLocationPermissionDialog] = useState(false);

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
                onLocation={onLocation}>
                <MapView.Marker
                    draggable
                    title="这是一个可拖拽的标记"
                    onDragEnd={({nativeEvent}) =>
                        console.log(
                            `${nativeEvent.latitude}, ${nativeEvent.longitude}`,
                        )
                    }
                    coordinate={{
                        latitude: 39.91095,
                        longitude: 116.37296,
                    }}
                />
            </MapView>
        </View>
    );
}

export default Map;
