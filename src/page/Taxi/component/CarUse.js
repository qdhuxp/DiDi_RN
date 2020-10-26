import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Flex, WingBlank} from '@ant-design/react-native';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faCar,
    faClock,
    faEllipsisV,
    faMapSigns,
    faPlane,
} from '@fortawesome/free-solid-svg-icons';
import {SystemContext} from '../../../../Context';

function CarUse(props) {
    const {currentLocation, getShortAddress} = useContext(SystemContext);
    const styles = {
        testColor: '#45465A',
        cardBGColor: '#2A2C45',
        progressBarColor: '#C6997A',
    };
    const functionButtons = [
        {
            icon: faClock,
            text: '预约',
        },
        {
            icon: faPlane,
            text: '接送机',
        },
        {
            icon: faMapSigns,
            text: '远程特惠',
        },
        {
            icon: faCar,
            text: '包车',
        },
        {
            icon: faEllipsisV,
            text: '',
        },
    ].map((item) => {
        return (
            <Button
                key={item.text}
                // size='sm'
                style={{
                    // flex: 1,
                    // width: 'auto',
                    alignItems: 'center',
                    borderColor: 'transparent',
                    backgroundColor: '#ECEBF0',
                    borderRadius: 0,
                    paddingLeft: 5,
                    paddingRight: 5,
                    justifyContent: 'center',
                }}>
                <FontAwesomeIcon
                    icon={item.icon}
                    size={10}
                    color={styles.testColor}
                />
                <Text
                    style={{
                        fontSize: 12,
                        color: styles.testColor,
                        marginLeft: 3,
                    }}>
                    {' ' + item.text}
                </Text>
            </Button>
        );
    });
    const [currentAddressInfo, setCurrentAddressInfo] = useState(null);
    useEffect(() => {
        const addressName = getShortAddress();
        setCurrentAddressInfo(addressName);
        if (addressName === null) {
            setCurrentAddressInfo(
                <Text style={{fontSize: 12, marginLeft: 10}}>
                    正在获取上车地点...
                </Text>,
            );
        } else {
            setCurrentAddressInfo(
                <Text style={{fontSize: 12, marginLeft: 10}}>
                    你将从{' '}
                    <Text
                        style={{
                            color: '#1B9B80',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>
                        {addressName}
                    </Text>{' '}
                    上车 >
                </Text>,
            );
        }
    }, [currentLocation]);

    function changeOnBoardAddress() {
        console.log('To changeOnBoardAddress');
    }

    return (
        <Card
            style={{
                borderColor: 'transparent',
                borderRadius: 2,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingBottom: 0,
                backgroundColor: '#ECEBF0',
            }}>
            <Card.Header
                title={
                    <Text
                        style={{
                            fontSize: 12,
                            color: '#817D94',
                            marginLeft: 5,
                        }}>
                        尊敬的黄金会员，下午好！
                    </Text>
                }
                thumb={
                    <Image
                        source={require('../../../assets/spirit.jpg')}
                        style={{width: 30, height: 30}}
                    />
                }
                style={{
                    height: 40,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    marginLeft: 0,
                    paddingLeft: 10,
                }}
            />
            <Card.Body
                style={{
                    backgroundColor: 'white',
                    borderColor: '#F1F3FF',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingBottom: 15,
                }}>
                <View style={{height: 80, backgroundColor: 'white'}}>
                    <WingBlank
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Flex
                            justify="start"
                            style={{
                                width: '100%',
                                padding: 10,
                                marginLeft: 10,
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'green',
                                    width: 6,
                                    height: 6,
                                    borderRadius: 3,
                                }}
                            />
                            {currentAddressInfo}
                        </Flex>
                        <TouchableWithoutFeedback
                            onPress={changeOnBoardAddress}
                            style={{width: '100%'}}>
                            <Flex
                                style={{
                                    width: '100%',
                                    backgroundColor: '#ECEBF0',
                                    padding: 10,
                                    borderRadius: 10,
                                    marginLeft: 10,
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'red',
                                        width: 6,
                                        height: 6,
                                        borderRadius: 3,
                                    }}
                                />

                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        marginLeft: 10,
                                    }}>
                                    输入你的目的地
                                </Text>
                            </Flex>
                        </TouchableWithoutFeedback>
                    </WingBlank>
                </View>
            </Card.Body>
            <Card.Footer
                style={{backgroundColor: '#ECEBF0'}}
                content={
                    <View
                        style={{
                            width: '100%',
                            height: 48,
                            backgroundColor: '#ECEBF0',
                        }}>
                        <Flex justify="between" align="center">
                            {functionButtons}
                        </Flex>
                    </View>
                }
            />
        </Card>
    );
}

export default CarUse;
