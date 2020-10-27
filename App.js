/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Provider} from '@ant-design/react-native';
import AppContext from './Context';
import Web from './src/page/Web';
import Bike from './src/page/Bike';
import Taxi from './src/page/Taxi';
import SafeCenter from './src/page/SafeCenter';
import Header from './src/component/Header';
import NavLeftButton from './src/component/NavLeftButton';

// const Stack = createStackNavigator();
// const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App: () => React$Node = () => {
    const SystemNavigator = React.useRef(null);
    const screenOptions = {
        title: '',
        headerLeft: () => {
            return <NavLeftButton />;
        },
    };
    const modalScreenHeaderOptions = {
        title: '',
        headerLeft: () => {
            return <View />;
        },
        headerStyle: {
            backgroundColor: 'transparent',
            // shadowColor: 'transparent',
            elevation: 0,
            borderBottomColor: 'transparent',
        },
        cardStyle: {backgroundColor: 'rgba(0,0,0,0.3)'},
    };

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
                    <Tab.Screen
                        name="BikePage"
                        component={Bike}
                        // options={screenOptions}
                    />
                    <Tab.Screen
                        name="TaxiPage"
                        component={Taxi}
                        // options={screenOptions}
                    />
                </Tab.Navigator>
                <Header SystemNavigator={SystemNavigator} />
            </>
        );
    }

    return (
        <Provider>
            <AppContext>
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
                    </RootStack.Navigator>
                </NavigationContainer>
            </AppContext>
        </Provider>
    );
};

export default App;
