import React, {useState} from 'react';
import {
    Dimensions,
    Linking,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import {Flex} from '@ant-design/react-native';
import {Icon, Item} from 'native-base';
// import {useNavigation} from '@react-navigation/native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

function SideBar(props) {
    // const navigation = useNavigation();
    const functionList = [
        {
            title: '订单',
            icon: {
                type: 'FontAwesome5',
                name: 'file',
            },
            link: '',
        },
        {
            title: '安全',
            icon: {
                type: 'FontAwesome5',
                name: 'shield-alt',
            },
            link: '',
        },
        {
            title: '钱包',
            icon: {
                type: 'FontAwesome5',
                name: 'wallet',
            },
            link: '',
        },
        {
            title: '客服',
            icon: {
                type: 'FontAwesome5',
                name: 'headphones',
            },
            link: '',
        },
        {
            title: '设置',
            icon: {
                type: 'FontAwesome5',
                name: 'cog',
            },
            link: '',
        },
    ].map((item) => {
        return (
            <TouchableOpacity
                key={item.title}
                onPress={() => {
                    props.navigation.navigate('Web');
                }}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                <Icon {...item.icon} style={{fontSize: 20, marginRight: 10}} />
                <Text> {item.title} </Text>
            </TouchableOpacity>
        );
    });

    const functionShortcutList = [
        {
            title: '推荐有奖',
            icon: {
                type: 'SimpleLineIcons',
                name: 'present',
            },
            badge: '',
            link: '',
        },
        {
            title: '车主招募',
            icon: {
                type: 'FontAwesome5',
                name: 'user-check',
            },
            badge: '',
            link: '',
        },
        {
            title: '企业版',
            icon: {
                type: 'FontAwesome5',
                name: 'briefcase',
            },
            badge: '',
            link: '',
        },
        {
            title: '优惠商城',
            icon: {
                type: 'FontAwesome5',
                name: 'yen-sign',
            },
            badge: '',
            link: '',
        },
        {
            title: '积分商城',
            icon: {
                type: 'FontAwesome5',
                name: 'shopping-cart',
            },
            badge: '',
            link: '',
        },
        {
            title: '权益抽奖',
            icon: {
                type: 'FontAwesome5',
                name: 'ice-cream',
            },
            badge: '广告',
            link: '',
        },
        {
            title: '兑换码',
            icon: {
                type: 'FontAwesome5',
                name: 'arrows-alt-h',
            },
            badge: '',
            link: '',
        },
        {
            title: '滴滴闪付',
            icon: {
                type: 'FontAwesome5',
                name: 'credit-card',
            },
            badge: '',
            link: '',
        },
        {
            title: '学生中心',
            icon: {
                type: 'FontAwesome',
                name: 'mortar-board',
            },
            badge: '',
            link: '',
        },
        {
            title: '亲亲卡',
            icon: {
                type: 'FontAwesome5',
                name: 'heart',
            },
            badge: '',
            link: '',
        },
        {
            title: '换优惠券',
            icon: {
                type: 'FontAwesome5',
                name: 'cart-arrow-down',
            },
            badge: '',
            link: '',
        },
        {
            title: '滴滴公益',
            icon: {
                type: 'FontAwesome5',
                name: 'hands-helping',
            },
            badge: '',
            link: '',
        },
        {
            title: '特惠充值',
            icon: {
                type: 'FontAwesome5',
                name: 'donate',
            },
            badge: '',
            link: '',
        },
        {
            title: '小桔车服',
            icon: {
                type: 'FontAwesome5',
                name: 'headset',
            },
            badge: '',
            link: '',
        },
        {
            title: '优惠加油',
            icon: {
                type: 'FontAwesome5',
                name: 'gas-pump',
            },
            badge: '',
            link: '',
        },
        {
            title: '同城服务',
            icon: {
                type: 'FontAwesome5',
                name: 'city',
            },
            badge: '第三方',
            link: '',
        },
        {
            title: '手机充值',
            icon: {
                type: 'FontAwesome5',
                name: 'mobile-alt',
            },
            badge: '',
            link: '',
        },
        {
            title: '防疫动态',
            icon: {
                type: 'FontAwesome5',
                name: 'heartbeat',
            },
            badge: '',
            link: '',
        },
        {
            title: '车票',
            icon: {
                type: 'FontAwesome5',
                name: 'ticket-alt',
            },
            badge: '',
            link: '',
        },
        {
            title: '意见征集',
            icon: {
                type: 'FontAwesome5',
                name: 'sticky-note',
            },
            badge: '',
            link: '',
        },
        {
            title: '周边商城',
            icon: {
                type: 'FontAwesome5',
                name: 'shopping-bag',
            },
            badge: '',
            link: '',
        },
        {
            title: '商旅特惠',
            icon: {
                type: 'FontAwesome5',
                name: 'luggage-cart',
            },
            badge: '',
            link: '',
        },
    ].map((item) => {
        return (
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: 60,
                    margin: 5,
                    marginBottom: 10,
                }}
                key={item.title}
                onPress={() => {
                    props.navigation.navigate('Web', {uri: item.link});
                }}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#888',
                        padding: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 5,
                    }}>
                <Icon {...item.icon} style={{fontSize: 10, color: '#888'}} />
                </View>
                <Text style={{fontSize: 12, color: '#888'}}> {item.title} </Text>
            </TouchableOpacity>
        );
    });
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={{
                    flex: 1,
                    paddingTop: 60,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 20,
                }}>
                {/*<Icon />*/}
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}>
                        <Icon
                            active
                            type="FontAwesome"
                            name="user-circle"
                            style={{
                                fontSize: 30,
                                color: 'orange',
                                marginRight: 10,
                            }}
                        />
                        <Text> User </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            borderRadius: 10,
                            backgroundColor: '#F3DAB1',
                            padding: 5,
                            marginBottom: 20,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyItems: 'between',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    flex: 3,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Icon type="MaterialIcons" name="stars" />
                                <Text> 黄金会员 </Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'black',
                                    paddingRight: 5,
                                    paddingLeft: 5,
                                    borderRadius: 5,
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 12,
                                        alignSelf: 'center',
                                    }}>
                                    查看权益
                                </Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 12}}>
                            限时抽1折打车券、iPad
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{padding: 10}}>{functionList}</View>
                <ScrollView>
                    <Flex justify="between" wrap="wrap">
                        {functionShortcutList}
                    </Flex>
                </ScrollView>
            </View>
        </DrawerContentScrollView>
    );
}

export default SideBar;
