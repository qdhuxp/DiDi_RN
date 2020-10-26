import React from 'react';
import {Button, Flex} from '@ant-design/react-native';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons';

function SafeCenterButton(props) {
    return (
        <Button
            size="small"
            style={{
                height: 35,
                borderColor: 'transparent',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={props.onPress}>
            <Flex>
                <FontAwesomeIcon icon={faShieldAlt} size={20} color="#548AE3" />
                <Text style={{marginLeft: 5}}>安全中心</Text>
            </Flex>
        </Button>
    );
}

export default SafeCenterButton;
