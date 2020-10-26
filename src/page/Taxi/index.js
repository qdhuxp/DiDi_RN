import React from 'react';
import Map from './component/Map';
import TaxiFloatPanel from './component/TaxiFloatPanel';

function Taxi(props) {
    return (
        <>
            <Map />
            <TaxiFloatPanel />
        </>
    );
}

export default Taxi;
