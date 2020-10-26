import React, {useContext, useState, useEffect, useRef} from 'react';
import {Button, Flex, WingBlank, Icon} from '@ant-design/react-native';
import {
    Text,
    View,
    Modal,
    SafeAreaView,
    TouchableHighlight,
    Image,
    Dimensions,
    ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faCameraRetro,
    faQrcode,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle, faCommentDots} from '@fortawesome/free-regular-svg-icons';
import * as Animatable from 'react-native-animatable';
import {SystemContext} from '../../../Context';

function Header(props) {
    const {showHeader, setShowHeader} = useContext(SystemContext);
    const headerRef = useRef(null);
    useEffect(() => {
        if (headerRef) {
            if (showHeader) {
                headerRef.current.slideInDown();
            } else {
                headerRef.current.slideOutUp();
            }
        }
    }, [showHeader]);

    return (
        <Animatable.View
            ref={headerRef}
            useNativeDriver={false}
            style={{height: 80}}>
            {/*<ImageBackground*/}
            {/*    resizeMode={'stretch'} // or cover*/}
            {/*    style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size*/}
            {/*    source={require('../../assets/headerBanner.jpg')}>*/}
                <View style={{paddingTop: 20}}>
                    {/*<SafeAreaView>*/}
                    <WingBlank>
                        <Flex justify="between" style={{height: 60}}>
                            <View style={{flex: 1}}>
                                <Flex justify="between">
                                    <Flex.Item>
                                        <TouchableHighlight>
                                            <View style={{width: 24}}>
                                                <FontAwesomeIcon
                                                    icon={faUserCircle}
                                                    size={22}
                                                />
                                            </View>
                                        </TouchableHighlight>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <TouchableHighlight>
                                            <Text
                                                style={{
                                                    alignItems: 'center',
                                                    fontSize: 12,
                                                    width: 60,
                                                }}>
                                                苏州市
                                                <FontAwesomeIcon
                                                    icon={faChevronDown}
                                                    size={12}
                                                />
                                            </Text>
                                        </TouchableHighlight>
                                    </Flex.Item>
                                </Flex>
                            </View>
                            <View style={{flex: 3}}>
                                <TouchableHighlight
                                    style={{
                                        justifyItems: 'center',
                                        width: '100%',
                                    }}>
                                    <View
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </TouchableHighlight>
                            </View>
                            <View style={{flex: 1}}>
                                <Flex justify="between">
                                    <View>
                                        <TouchableHighlight>
                                            <FontAwesomeIcon
                                                icon={faCommentDots}
                                                size={22}
                                            />
                                        </TouchableHighlight>
                                    </View>
                                    <View>
                                        <TouchableHighlight>
                                            <FontAwesomeIcon
                                                icon={faQrcode}
                                                size={22}
                                            />
                                        </TouchableHighlight>
                                    </View>
                                </Flex>
                            </View>
                        </Flex>
                    </WingBlank>
                    {/*</SafeAreaView>*/}
                </View>
            {/*</ImageBackground>*/}
        </Animatable.View>
    );
}
export default Header;
