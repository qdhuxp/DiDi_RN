import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../component/Header';
import SafeCenter from '../page/SafeCenter';
import Web from '../page/Web';
import NavLeftButton from '../component/NavLeftButton';
import {pages} from '../Config/default';
import QRCodeScan from '../page/QRCodeScan';
import MessageCenter from '../page/MessageCenter';
import CityPicker from '../page/CityPicker/index';

// const Stack = createStackNavigator();
// const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Route() {
    const SystemNavigator = React.useRef(null);
    const screenOptions = {
        title: '',
        headerLeft: () => {
            return <NavLeftButton />;
        },
    };
    const transparentHeaderStyle = {
        backgroundColor: 'transparent',
        elevation: 0,
        borderBottomColor: 'transparent',
    };

    const modalScreenHeaderOptions = {
        title: '',
        headerLeft: () => {
            return <View />;
        },
        headerStyle: transparentHeaderStyle,
        cardStyle: {backgroundColor: 'rgba(0,0,0,0.3)'},
    };
    const QRCodeScanPageOptions = {
        title: '扫一扫',
        headerStyle: transparentHeaderStyle,
        headerTintColor: '#fff',
        cardStyle: {
            backgroundColor: 'black',
        },
    };

    const Screens = pages.map((item) => {
        return (
            <Tab.Screen
                key={item.name}
                name={item.name}
                component={item.page}
                // options={screenOptions}
            />
        );
    });

    function MainStackScreen() {
        return (
            <>
                <Tab.Navigator
                    initialRouteName="BikePage"
                    tabBarPosition={'top'}
                    swipeEnabled={false}
                    tabBar={(props) => {
                        return <View />;
                    }}
                    screenOptions={{headerTitleAlign: 'center'}}>
                    {Screens}
                </Tab.Navigator>
                <Header SystemNavigator={SystemNavigator} />
            </>
        );
    }

    return (
        <NavigationContainer ref={SystemNavigator}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{headerShown: false}}
                />
                <RootStack.Screen
                    name="SafeCenter"
                    component={SafeCenter}
                    options={modalScreenHeaderOptions}
                />
                <RootStack.Screen
                    name="Web"
                    component={Web}
                    options={{
                        title: '滴滴出行',
                    }}
                />
                <RootStack.Screen
                    name="QRCodeScan"
                    component={QRCodeScan}
                    options={QRCodeScanPageOptions}
                />
                <RootStack.Screen
                    name="MessageCenter"
                    component={MessageCenter}
                    options={{
                        title: '消息中心',
                        cardStyle: {
                            backgroundColor: 'white',
                        },
                    }}
                />
                <RootStack.Screen
                    name="CityPicker"
                    component={CityPicker}
                    options={{
                        title: '',
                        cardStyle: {
                            backgroundColor: 'white',
                        },
                        headerShown: false,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Route;
