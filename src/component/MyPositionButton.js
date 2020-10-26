import React, {useContext} from 'react';
import {Button} from '@ant-design/react-native';
import {View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {SystemContext} from '../../Context';

function MyPositionButton(props) {
    const {setCurrentLocation} = useContext(SystemContext);

    function onRelocation(e) {
        setCurrentLocation(null);
    }

    return (
        <View>
            <Button
                size="small"
                style={{
                    // flex: 1,
                    width: 35,
                    height: 35,
                    alignItems: 'center',
                    borderColor: 'transparent',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 0,
                    padding: 0,
                    justifyContent: 'center',
                }}
                onPress={onRelocation}>
                <FontAwesomeIcon icon={faCrosshairs} size={20} color="black" />
            </Button>
        </View>
    );
}

export default MyPositionButton;
