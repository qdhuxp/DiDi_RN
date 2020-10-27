import React, {useContext, useState} from 'react';
import {
    Dimensions,
    Image,
    ScrollView, StatusBar,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {Button, Flex, List, Modal, WhiteSpace} from '@ant-design/react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
    faAmericanSignLanguageInterpreting,
    faBroadcastTower,
    faCircle,
    faMapMarker,
    faMicrophone,
    faPhone,
    faUpload,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function SafeCenter(props) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const banner = [
        {
            icon: require('../../assets/security-banner0.jpg'),
            uri:
                'https://rayman.xiaojukeji.com/?appid=10000&lang=zh-CN&clientType=1&trip_cityid=23&datatype=101&imei=a5efb8a19d9bc54dedb3835a1d6f6d0c&channel=102&appversion=6.0.12&trip_country=CN&TripCountry=CN&lng=121.148042&maptype=soso&os=iOS&utc_offset=480&location_cityid=23&access_key_id=1&deviceid=a5efb8a19d9bc54dedb3835a1d6f6d0c&cityid=23&location_country=CN&phone=FCD/PTpPnMAIvhJPSKu6XQ==&model=iPhone6s&lat=31.287992&origin_id=1&client_type=1&terminal_id=1&sig=794b93ced738ef0bd9a36a941b567a3369d1ba30#/app/safety_site/index',
        },
        {
            icon: require('../../assets/security-banner1.jpg'),
            uri:
                'https://dpubstatic.udache.com/static/dpubimg/ad97065e215a93a3a9881383ba4f1d0d/index.html?TripCountry=CN&access_key_id=1',
        },
        {
            icon: require('../../assets/security-banner2.jpg'),
            uri:
                'https://page.udache.com/public-biz/public-review/index.html#/articleDetail?aid=72057594040315696',
        },
    ].map((item) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    borderRadius: 10,
                }}>
                <TouchableWithoutFeedback
                    onPress={() =>
                        navigation.navigate('Web', {
                            uri: item.uri,
                        })
                    }>
                    <Image
                        source={item.icon}
                        resizeMode="stretch"
                        style={{
                            height: '100%',
                            width: Dimensions.get('window').width,
                            // borderTopRightRadius: 10,
                            // borderTopLeftRadius: 10,
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    });

    const safeFunctionButtons = [
        {
            icon: faUser,
            text: '紧急联系人',
            footer: '关注行程安全',
        },
        {
            icon: faMapMarker,
            text: '位置保护',
            footer: '实时行程监护',
        },
        {
            icon: faVideo,
            text: '行程录像',
            footer: '保障纠纷取证',
        },
        {
            icon: faMicrophone,
            text: '行程录音',
            footer: '全程录音监督',
        },
        {
            icon: faPhone,
            text: '号码保护',
            footer: '司乘号码加密',
        },
        {
            icon: faAmericanSignLanguageInterpreting,
            text: '关怀宝',
            footer: '全方位保障',
        },
        {
            icon: faCircle,
            text: '查看更多 >',
            footer: '',
        },
    ].map((item, index) => {
        return (
            <View
                key={'safeFunctionButtons' + index}
                style={{
                    margin: 5,
                    marginTop: 15,
                    padding: 5,
                    alignItems: 'center',
                    justifyItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#F1F3FF',
                }}>
                {/*<Image source={require('../../../assets/shield.jpg')}>*/}
                <View
                    style={{
                        marginTop: -15,
                        marginBottom: 5,
                        backgroundColor: 'white',
                    }}>
                    <FontAwesomeIcon
                        icon={item.icon}
                        size={25}
                        color="#548AE3"
                    />
                </View>
                <Text style={{}}>{item.text}</Text>
                <Text style={{color: 'grey', fontSize: 10}}>{item.footer}</Text>
            </View>
        );
    });

    const SafeAdList = [
        {
            icon: require('../../assets/safePoster00.jpg'),
            title: '',
            text: '滴滴警企合作新进展：联合200多城警方安全语音播报超1亿次',
            uri:
                'https://page.udache.com/public-biz/public-review/index.html#/articleDetail?aid=72057594040315696',
        },
        {
            icon: require('../../assets/safePoster0.jpg'),
            title: '安全须知',
            text: '你真的会系安全带吗？',
            uri:
                'https://page.udache.com/public-biz/public-review/index.html#/articleDetail?aid=72057594040315696',
        },
        {
            icon: require('../../assets/safePoster1.jpg'),
            title: '安全发布',
            text: '滴滴警企合作新进展：联合郑州公安发布网约车安全报告',
            uri:
                'https://page.udache.com/public-biz/public-review/index.html#/articleDetail?aid=72057594040347388',
        },
        {
            icon: require('../../assets/safePoster2.jpg'),
            title: '安全无止境',
            text: '滴滴持续努力提升出行安全',
            uri:
                'https://dpubstatic.udache.com/static/dpubimg/dpub2_project_111743/index_111743.html',
        },
    ].map((item, index) => {
        return (
            <List.Item
                key={'SafeAdListItem' + index}
                wrap
                extra={
                    <Image
                        resizeMode="stretch"
                        style={{width: 110, height: 70}}
                        source={item.icon}
                    />
                }
                onPress={() =>
                    navigation.navigate('Web', {
                        uri: item.uri,
                    })
                }>
                <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#212F3D',
                        }}>
                        {item.title}
                    </Text>
                    <Text style={{fontSize: 16}}>{item.text}</Text>
                </View>
            </List.Item>
        );
    });
    const [activeBannerSlideIndex, setActiveBannerSlideIndex] = useState(0);

    function bannerRender(item, index) {
        // console.log(item)
        return item.item;
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'transparent',
                maxHeight: Dimensions.get('window').height,
            }}>
            <StatusBar
                barStyle="dark-content"
                translucent={true}
                backgroundColor="transparent"
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: 155,
                }}>
                <Carousel
                    layout={'default'}
                    data={banner}
                    renderItem={bannerRender}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    firstItem={0}
                    removeClippedSubviews={false}
                    inactiveSlideScale={1}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={isFocused}
                    autoplayDelay={1000}
                    autoplayInterval={5000}
                    onSnapToItem={(index) => setActiveBannerSlideIndex(index)}
                />
                <Pagination
                    dotsLength={banner.length}
                    activeDotIndex={activeBannerSlideIndex}
                    containerStyle={{
                        // backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        position: 'absolute',
                        bottom: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                    dotStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        // marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                    }}
                    // inactiveDotStyle={}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                />
            </View>
            <View
                style={{
                    backgroundColor: 'white',
                }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor: 'white', maxHeight: 400}}
                    onScrollEndDrag={({nativeEvent}) => {
                        if (nativeEvent.contentOffset.y === 0) {
                            navigation.goBack();
                        }
                    }}>
                    <WhiteSpace size="lg" />
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {safeFunctionButtons}
                    </ScrollView>
                    <WhiteSpace size="lg" />
                    <List renderHeader={'安全之声'}>{SafeAdList}</List>
                    <WhiteSpace size="lg" />
                </ScrollView>
                <Flex
                    justify={'center'}
                    align="center"
                    style={{
                        padding: 10,
                    }}>
                    <View>
                        <Button
                            style={{width: 140, margin: 10}}
                            onPress={() => navigation.goBack()}>
                            <FontAwesomeIcon icon={faUpload} size={20} />{' '}
                            行程分享
                        </Button>
                    </View>
                    <View>
                        <Button type="warning" style={{width: 140, margin: 10}}>
                            <FontAwesomeIcon
                                icon={faBroadcastTower}
                                size={20}
                                color="white"
                            />{' '}
                            110报警
                        </Button>
                    </View>
                </Flex>
                {/*<WhiteSpace size="lg" />*/}
            </View>
        </View>
    );
}

export default SafeCenter;
