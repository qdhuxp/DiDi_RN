import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Flex} from '@ant-design/react-native';

// import styles from '../../theme.less';

function ADCard(props) {
    return (
        <View style={{backgroundColor: 'white'}}>
            <Text
                style={{
                    fontSize: 12,
                    color: '#212F3D',
                    position: 'absolute',
                    top: 15,
                    left: 10,
                }}>
                {props.title || ''}
            </Text>
            <Flex style={{padding: 10, height: 110, paddingBottom: 0}}>
                <Flex.Item style={{flex: 2}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {props.text}
                    </Text>
                </Flex.Item>
                <Flex.Item style={{flex: 1}}>
                    <Image
                        style={{width: 70, height: 70, borderRadius: 35}}
                        source={props.icon}
                    />
                </Flex.Item>
            </Flex>
            <View style={{backgroundColor: '#F8F9F9', height: 40, padding: 10}}>
                <Flex
                    justify="end"
                    align="center"
                    style={{height: '100%', width: '100%'}}>
                    {/*<Flex.Item>*/}
                    <Button
                        size="small"
                        style={{
                            fontSize: 12,
                            fontcolor: '#212F3D',
                            borderColor: 'transparent',
                            width: 80,
                            backgroundColor: 'transparent',
                        }}>
                        {props.buttonName} —>
                    </Button>
                    {/*</Flex.Item>*/}
                </Flex>
            </View>
        </View>
    );
}

export default ADCard;
