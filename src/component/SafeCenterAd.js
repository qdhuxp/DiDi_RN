import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Flex} from '@ant-design/react-native';

// import styles from '../../theme.less';

function SafeCenterAd(props) {
    return (
        <View style={{backgroundColor: 'white'}}>
            <Text
                style={{
                    fontSize: 12,
                    color: '#212F3D',
                    // position: 'absolute',
                    top: 15,
                    left: 10,
                }}>
                {props.title || ''}
            </Text>
            <Flex
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 0,
                    marginTop: 5,
                }}>
                <Flex.Item style={{flex: 2}}>
                    <Text style={{fontSize: 16}}>{props.text}</Text>
                </Flex.Item>
                <Flex.Item style={{flex: 1}}>
                    <Image
                        resizeMode="stretch"
                        style={{width: 110, height: 70}}
                        source={props.icon}
                    />
                </Flex.Item>
            </Flex>
        </View>
    );
}

export default SafeCenterAd;
