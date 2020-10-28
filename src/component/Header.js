import React, {useContext, useEffect, useRef, useState} from 'react';
import {Flex, Tabs, WingBlank} from '@ant-design/react-native';
import {
    ImageBackground,
    StatusBar,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faQrcode} from '@fortawesome/free-solid-svg-icons';
import {faCommentDots, faUserCircle} from '@fortawesome/free-regular-svg-icons';
import * as Animatable from 'react-native-animatable';
import {SystemContext} from '../../Context';
import NavLeftButton from './NavLeftButton';

function Header(props) {
    const {showHeader} = useContext(SystemContext);
    const headerRef = useRef(null);
    const headerBarRef = useRef(null);
    const [pageTabs, setPageTabs] = useState([]);

    const pages = [
        {
            title: '青桔骑行',
            page: 'BikePage',
        },
        {title: '打车', page: 'TaxiPage'},
        {title: '拉货搬家', page: 'GoodsPickUpPage'},
        {title: '特惠来了', page: 'CouponPage'},
        {title: '顺风车', page: 'HitchRidePage'},
        {title: '青菜拼车', page: 'CarPoolPage'},
        {title: '公交', page: 'BusPage'},
        {title: '代驾', page: 'DesignatedDrivePage'},
    ];

    useEffect(() => {
        if (props.SystemNavigator) {
            const list = pages.map((item) => {
                return (
                    <TouchableHighlight
                        key={item.title}
                        onPress={() =>
                            props.SystemNavigator.current.navigate(item.page)
                        }>
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
        }
    }, [props.SystemNavigator]);

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
                flex: 1,
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
                        // position: 'absolute',
                        top: 0,
                        left: 0,
                        padding: 5,
                        // paddingTop: 15,
                        backgroundColor: 'white',
                        // alignItems: 'center',
                        // justifyItems: 'start',
                        justifyContent: 'center'
                    }} >
                    <SafeAreaView >
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
                        {/*<View style={{height: 20}} />*/}
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
                        props.SystemNavigator.current.navigate(tab.page);
                    }}
                    // renderTab={(tab) => {
                    //     // 可以对选中的tab设置样式
                    //     console.log(tab);
                    //     return (
                    //         <View>
                    //             <Text>{tab.title}</Text>
                    //         </View>
                    //     );
                    // }}
                    // renderTabBar={(props) => {
                    //     console.log(props)
                    //     return (
                    //         <ScrollView
                    //             horizontal={true}
                    //             style={{
                    //                 backgroundColor: 'white',
                    //                 borderBottomRightRadius: 15,
                    //                 borderBottomLeftRadius: 15,
                    //                 borderWidth: 0,
                    //             }}>
                    //             {pageTabs}
                    //         </ScrollView>
                    //     );
                    // }}
                />
            </Animatable.View>

        </View>
    );
}

export default Header;
