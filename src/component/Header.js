import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Flex,
    Tabs,
    WingBlank,
    Drawer,
    WhiteSpace,
    Button,
} from '@ant-design/react-native';
import {
    ImageBackground,
    StatusBar,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faQrcode} from '@fortawesome/free-solid-svg-icons';
import {faCommentDots, faUserCircle} from '@fortawesome/free-regular-svg-icons';
import * as Animatable from 'react-native-animatable';
import {SystemContext} from '../../Context';
import NavLeftButton from './NavLeftButton';
import {pages} from '../Config/default';

function Header(props) {
    const {showHeader, currentLocation} = useContext(SystemContext);
    const headerRef = useRef(null);
    const headerBarRef = useRef(null);
    const [pageTabs, setPageTabs] = useState([]);
    const [drawerRef, setDrawerRef] = useState(null);

    useEffect(() => {
        const list = pages.map((item) => {
            return (
                <TouchableHighlight
                    key={item.title}
                    onPress={() => props.navigation.navigate(item.name)}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyItems: 'center',
                            padding: 10,
                        }}>
                        <Text>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
        setPageTabs(list);
    }, []);

    useEffect(() => {
        if (headerRef) {
            if (showHeader) {
                headerRef.current.slideInDown(500);
                headerBarRef.current.fadeOut(100);
            } else {
                headerRef.current.fadeOutUpBig(500);
                headerBarRef.current.fadeIn(200);
            }
        }
    }, [showHeader]);

    return (
        <View
            style={{
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
            }}>
            <Animatable.View ref={headerBarRef} useNativeDriver={true}>
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        padding: 5,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                    }}>
                    <SafeAreaView>
                        <NavLeftButton />
                    </SafeAreaView>
                </View>
            </Animatable.View>
            <Animatable.View
                ref={headerRef}
                useNativeDriver={true}
                style={{
                    flex: 1,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'transparent',
                }}>
                <ImageBackground
                    resizeMode={'stretch'} // or cover
                    style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                    source={require('../assets/headerBanner.jpg')}>
                    <StatusBar
                        barStyle="dark-content"
                        translucent={true}
                        backgroundColor="transparent"
                    />
                    <View style={{paddingTop: 20}}>
                        <WingBlank>
                            <Flex justify="between" style={{height: 60}}>
                                <View style={{flex: 1}}>
                                    <Flex justify="between">
                                        <Flex.Item>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    props.navigation.toggleDrawer();
                                                }}>
                                                <View style={{width: 24}}>
                                                    <FontAwesomeIcon
                                                        icon={faUserCircle}
                                                        size={22}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <TouchableOpacity
                                                style={{
                                                    alignItems: 'center',
                                                    fontSize: 12,
                                                    width: 60,
                                                }}
                                                onPress={() => {
                                                    props.navigation.navigate(
                                                        'CityPicker',
                                                    );
                                                }}>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                    }}>
                                                    <Text>
                                                        {(currentLocation &&
                                                            currentLocation
                                                                .addressComponent
                                                                .city) ||
                                                            '选择城市'}
                                                    </Text>
                                                    <FontAwesomeIcon
                                                        icon={faChevronDown}
                                                        size={12}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </Flex.Item>
                                    </Flex>
                                </View>
                                <View style={{flex: 3}}>
                                    <TouchableOpacity
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
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1}}>
                                    <Flex justify="between">
                                        <View>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    props.navigation.navigate(
                                                        'MessageCenter',
                                                    );
                                                }}>
                                                <FontAwesomeIcon
                                                    icon={faCommentDots}
                                                    size={22}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    props.navigation.navigate(
                                                        'QRCodeScan',
                                                    );
                                                }}>
                                                <FontAwesomeIcon
                                                    icon={faQrcode}
                                                    size={22}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </Flex>
                                </View>
                            </Flex>
                        </WingBlank>
                    </View>
                </ImageBackground>

                <Tabs
                    style={{
                        backgroundColor: 'transparent',
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15,
                    }}
                    tabs={pages}
                    initialPage={0}
                    usePaged={false}
                    tabBarActiveTextColor="#FF6100"
                    tabBarInactiveTextColor="black"
                    tabBarUnderlineStyle={{
                        backgroundColor: '#FF6100',
                    }}
                    onTabClick={(tab, index) => {
                        props.navigation.navigate(tab.name);
                    }}
                />
            </Animatable.View>
        </View>
    );
}

export default Header;
