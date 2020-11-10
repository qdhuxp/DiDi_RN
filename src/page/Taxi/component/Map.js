import React, {useContext, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {MapView} from 'react-native-amap3d';
import {SystemContext} from '../../../../Context';
import PickupIndicator from './PickupIndicator';

function Map(props) {
    const {
        currentPosition,
        setCurrentPosition,
        currentLocation,
        setCurrentLocation,
        getShortAddress,
        getReadableAddress,
    } = useContext(SystemContext);
    const MapRef = useRef(null);
    const [myPosition, setMyPosition] = useState({
        latitude: 39.706901,
        longitude: 116.397972,
    });

    const [currentAddressInfo, setCurrentAddressInfo] = useState(null);
    const [enableMapLocation, setEnableMapLocation] = useState(true);

    function onLocation(location) {
        if (location.latitude !== 0 && location.longitude !== 0) {
            setMyPosition(location);
            setCurrentPosition(location);
            setEnableMapLocation(false);
        }
    }

    useEffect(() => {
        if (currentPosition) {
            setCurrentAddressInfo(getShortAddress());
            getReadableAddress(currentPosition);
        }
    }, [currentPosition]);

    useEffect(() => {
        if (currentLocation) {
            const addressName = getShortAddress();
            setCurrentAddressInfo(addressName);
        } else {
            setEnableMapLocation(true);
        }
    }, [currentLocation]);

    function onStatusChangeComplete(location) {
        setCurrentPosition(location.center);
    }

    return (
        <View>
            <MapView
                ref={MapRef}
                style={{width: '100%', height: '100%'}}
                zoomLevel={18}
                locationInterval={10000}
                distanceFilter={10}
                center={myPosition}
                coordinate={myPosition}
                locationEnabled={enableMapLocation}
                showsLabels
                showsTraffic
                scrollEnabled
                onLocation={onLocation}
                onStatusChangeComplete={onStatusChangeComplete}
            />
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    bottom: '50%',
                    left: 0,
                    alignItems: 'center',
                    justifyItems: 'center',
                }}>
                <PickupIndicator currentAddressInfo={currentAddressInfo} />
            </View>
        </View>
    );
}

export default Map;
