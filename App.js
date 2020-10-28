/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from '@ant-design/react-native';
import AppContext from './Context';
import Route from './src/Routes/Route';

const App: () => React$Node = () => {
    return (
        <Provider>
            <AppContext>
                <Route />
            </AppContext>
        </Provider>
    );
};

export default App;
