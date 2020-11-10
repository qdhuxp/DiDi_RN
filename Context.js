import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Geolocation,
    init,
    setLocatingWithReGeocode,
    setNeedAddress,
} from 'react-native-amap-geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

export const SystemContext = React.createContext({});

export default function AppContext({children}) {
    const [systemNavigator, setSystemNavigator] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const AMapKey = {
        ios: 'YOUR_IOS_KEY_HERE',
        android: 'YOUR_ANDROID_KEY_HERE',
        web: 'YOUR_WEB_KEY_HERE',
    };

    useEffect(() => {
        const locationTimer = getLocation();

        return () => {
            Geolocation.clearWatch(locationTimer);
        };
    }, []);

    async function getLocation() {
        // 对于 Android 需要自行根据需要申请权限
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ]);
            console.log(result);
        }

        await init(AMapKey);
        if (Platform.OS === 'android') {
            setNeedAddress(true);
        } else {
            setLocatingWithReGeocode(true);
        }
        // return Geolocation.watchPosition((position) => {
        //     setCurrentPosition(position.coords);
        //     getReadableAddress(position.coords);
        // });
    }
    // https://lbs.amap.com/api/webservice/guide/api/georegeo
    function getReadableAddress(location) {
        const url =
            'http://restapi.amap.com/v3/geocode/regeo?output=json&key=' +
            AMapKey.web +
            '&radius=100&extensions=all&location=';
        fetch(url + location.longitude + ',' + location.latitude, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setCurrentLocation(responseJson.regeocode);
                // console.log(responseJson.regeocode.addressComponent.building);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function getShortAddress() {
        if (currentLocation && currentLocation.pois.length) {
            // console.log(currentLocation);
            if (currentLocation.pois.length > 1) {
                currentLocation.pois.sort((a, b) => {
                    if (parseFloat(a.distance) > parseFloat(b.distance)) {
                        return 1;
                    }

                    if (parseFloat(a.distance) < parseFloat(b.distance)) {
                        return -1;
                    }

                    return 0;
                });
            }
            return currentLocation.pois[0].name;
        }

        return null;
    }

    return (
        <SystemContext.Provider
            value={{
                showHeader,
                setShowHeader,
                systemNavigator,
                setSystemNavigator,
                currentPosition,
                setCurrentPosition,
                currentLocation,
                setCurrentLocation,
                getShortAddress,
                getReadableAddress,
            }}>
            {children}
        </SystemContext.Provider>
    );
}

SystemContext.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
};
