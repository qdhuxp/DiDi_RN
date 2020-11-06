import React, {useState} from 'react';
import {
    Dimensions,
    Linking,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
} from 'react-native';
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
                name: 'file-alt',
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
                            // width: '100%',
                            borderRadius: 10,
                            backgroundColor: '#F3DAB1',
                            padding: 5,
                            marginBottom: 20,
                        }}>
                        <View
                            style={{
                                // width: '100%',
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
                                <Icon
                                    active
                                    type="MaterialIcons"
                                    name="stars"
                                />
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
            </View>
        </DrawerContentScrollView>
    );
}

export default SideBar;
