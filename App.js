/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs, TransitionPresets} from '@react-navigation/stack';
import {Provider} from '@ant-design/react-native';
import AppContext from './Context';
import Home from './src/page/Home/Home';
import Web from './src/page/Web';
import Bike from './src/page/Bike';
import Taxi from './src/page/Taxi';
import SafeCenter from './src/page/SafeCenter';
import Header from './src/component/Header';
import NavLeftButton from './src/component/NavLeftButton';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

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
                <MainStack.Navigator
                    initialRouteName="BikePage"
                    screenOptions={{headerTitleAlign: 'center'}}>
                    <MainStack.Screen
                        name="BikePage"
                        component={Bike}
                        options={screenOptions}
                    />
                    <MainStack.Screen
                        name="TaxiPage"
                        component={Taxi}
                        options={screenOptions}
                    />
                </MainStack.Navigator>
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
