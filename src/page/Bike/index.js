import React, {useState} from 'react';
import Map from './component/Map';
import BikeFloatPanel from './component/BikeFloatPanel';

function Bike(props) {
    return (
        <>
            <Map />
            <BikeFloatPanel />
        </>
    );
}

export default Bike;
