import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useIsFocused} from '@react-navigation/native';

function PickupIndicator(props) {
    const isFocused = useIsFocused();
    const locationNameView = useRef(null);
    const locationPointView = useRef(null);
    const [locationNameViewHidden, setLocationNameViewHidden] = useState(true);

    useEffect(() => {
        if (props.currentAddressInfo === null) {
            if (isFocused) {
                locationNameView.current.zoomOut(100).then((endState) => {
                    locationPointView.current.zoomIn(300).then(() => {
                        setLocationNameViewHidden(true);
                    });
                });
            } else {
                setLocationNameViewHidden(true);
            }
        } else {
            if (locationNameViewHidden) {
                if (isFocused) {
                    locationPointView.current.bounce(100).then((endState) => {
                        locationPointView.current.zoomOut(100).then(() => {
                            locationNameView.current.zoomIn(300).then(() => {
                                setLocationNameViewHidden(false);
                            });
                        });
                    });
                } else {
                    setLocationNameViewHidden(false);
                }
            }
        }
    }, [props.currentAddressInfo]);

    return (
        <View
            style={{
                alignItems: 'center',
                justifyItems: 'center',
            }}>
            <Animatable.View ref={locationNameView}>
                <View
                    style={{
                        display: props.currentAddressInfo ? 'flex' : 'none',
                        width: '100%',
                        alignItems: 'center',
                        justifyItems: 'center',
                    }}>
                    <View
                        style={{
                            maxWidth: '50%',
                            minHeight: 40,
                            color: 'white',
                            backgroundColor: '#1B9B80',
                            borderRadius: 20,
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 15,
                            paddingRight: 15,
                            alignItems: 'center',
                            justifyItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>
                            {props.currentAddressInfo}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 4,
                            height: 15,
                            backgroundColor: '#1B9B80',
                            marginTop: -3,
                        }}
                    />
                </View>
            </Animatable.View>
            <Animatable.View ref={locationPointView}>
                <View
                    style={{
                        display: props.currentAddressInfo ? 'none' : 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyItems: 'center',
                    }}>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderWidth: props.currentAddressInfo ? 0 : 10,
                            borderRadius: 15,
                            borderColor: '#1B9B80',
                            backgroundColor: 'white',
                        }}
                    />
                    <View
                        style={{
                            width: 4,
                            height: 15,
                            backgroundColor: '#1B9B80',
                            marginTop: -3,
                        }}
                    />
                </View>
            </Animatable.View>
        </View>
    );
}

export default PickupIndicator;
