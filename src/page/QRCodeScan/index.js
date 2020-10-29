import React, {useState} from 'react';
import {Linking, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

function QRCodeScan(props) {
    const navigation = useNavigation();
    const [flashOn, setFlashOn] = useState(false);

    function onSuccess(e) {
        console.log(e.data);
        Linking.canOpenURL(e.data)
            .then((canOpen) => {
                console.log(canOpen);
                if (canOpen) {
                    Linking.openURL(e.data).catch((err) => {
                        console.error('An error occured', err);
                        alert(err);
                    });
                } else {
                    alert(e.data);
                }
            })
            .catch((err) => {
                alert(e.data);
            });
        navigation.goBack();
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor="transparent"
            />
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={
                    flashOn
                        ? RNCamera.Constants.FlashMode.on
                        : RNCamera.Constants.FlashMode.auto
                }
                showMarker={true}
                markerStyle={{borderColor: 'white', borderWidth: 1}}
                containerStyle={{height: '100%'}}
                topViewStyle={{display: 'none'}}
                cameraProps={{
                    // autoFocusPoint: {
                    //     normalized: {x: 0.5, y: 0.5}, // normalized values required for autoFocusPointOfInterest
                    //     drawRectPosition: {
                    //         x: Dimensions.get('window').width * 0.5 - 32,
                    //         y: Dimensions.get('window').height * 0.5 - 32,
                    //     },
                    // },
                    // ratio: '21:10',
                    useNativeZoom: true,
                    // rectOfInterest: {
                    //     x: 0,
                    //     y: 0,
                    //     width: Dimensions.get('window').width,
                    //     height: Dimensions.get('window').height,
                    // },
                    // cameraViewDimensions: {
                    //     width: Dimensions.get('window').width,
                    //     height: Dimensions.get('window').height,
                    // },
                }}
                bottomContent={
                    <TouchableOpacity
                        // style={styles.buttonTouchable}
                        onPress={() => setFlashOn(!flashOn)}>
                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: 'grey',
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                padding: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <FontAwesomeIcon
                                icon={faLightbulb}
                                size={22}
                                color={'white'}
                            />
                        </View>
                        <Text style={{color: 'white'}}>手电筒</Text>
                    </TouchableOpacity>
                }
            />
        </>
    );
}

export default QRCodeScan;
