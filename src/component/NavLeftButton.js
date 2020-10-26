import React, {useContext} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {SystemContext} from '../../Context';

function NavLeftButton(props) {
    const {setShowHeader} = useContext(SystemContext);
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                setShowHeader(true);
        }}>
            <View style={{paddingLeft: 10, paddingRight: 10}}>
                <FontAwesomeIcon icon={faArrowDown} size={18} />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default NavLeftButton;
