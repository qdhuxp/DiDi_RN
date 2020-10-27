import React, {useContext} from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {SystemContext} from '../../Context';

function NavLeftButton(props) {
    const {setShowHeader} = useContext(SystemContext);
    return (
        <TouchableNativeFeedback
            style={{
                flex: 1,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'flex-start',
                ...props.style,
            }}
            onPress={() => {
                setShowHeader(true);
            }}>
            <View
                style={{
                    padding: 5,
                    width: 30,
                }}>
                <FontAwesomeIcon icon={faArrowDown} size={20} />
            </View>
        </TouchableNativeFeedback>
    );
}

export default NavLeftButton;
