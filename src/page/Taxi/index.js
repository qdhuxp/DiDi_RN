import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Map from './component/Map';
import TaxiFloatPanel from './component/TaxiFloatPanel';

function Taxi(props) {
    return (
        <SafeAreaView>
            <Map />
            <TaxiFloatPanel />
        </SafeAreaView>
    );
}

export default Taxi;
