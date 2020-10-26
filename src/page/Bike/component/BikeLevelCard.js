import React from 'react';
import {Card, Flex, Progress, WingBlank} from '@ant-design/react-native';
import {Image, Text, View} from 'react-native';

function BikeLevelCard(props) {
    const styles = {
        testColor: '#45465A',
        cardBGColor: '#2A2C45',
        progressBarColor: '#C6997A',
    };

    const functionButtons = [
        {
            icon: require('../../../assets/btn_coupon.jpg'),
            text: '券礼包',
        },
        {
            icon: require('../../../assets/btn_accelerate.jpg'),
            text: '加速卡',
        },
        {
            icon: require('../../../assets/btn_compensation.jpg'),
            text: '调度费减免',
        },
        {
            icon: require('../../../assets/btn_fee_reduce.jpg'),
            text: '差体验赔偿',
        },
    ].map((item) => {
        return (
            <Flex.Item key={item.text} style={{flex: 1, alignItems: 'center'}}>
                <Image source={item.icon} style={{height: 20, width: 20}} />
                <Text style={{fontSize: 10, color: styles.testColor}}>
                    {item.text}
                </Text>
            </Flex.Item>
        );
    });

    return (
        <Card style={{borderColor: 'transparent', borderRadius: 2}}>
            <Card.Header
                title={
                    <Text style={{fontSize: 11, color: styles.testColor}}>
                        骑青桔，攒时长，享受更多权益
                    </Text>
                }
                extra=">"
                style={{height: 40}}
            />
            <Card.Body style={{backgroundColor: styles.cardBGColor}}>
                <View style={{height: 85, backgroundColor: styles.cardBGColor}}>
                    <WingBlank style={{marginBottom: 5}}>
                        <Flex>
                            <Flex.Item
                                style={{
                                    flex: 2,
                                    paddingRight: 4,
                                    height: 80,
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                    }}>
                                    初级探索者
                                </Text>

                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 10,
                                            marginBottom: 5,
                                        }}>
                                        当前成长值252，再升一级可得6元大礼包
                                    </Text>
                                    <Progress
                                        percent={90}
                                        style={{
                                            backgroundColor: 'white',
                                        }}
                                        barStyle={{
                                            borderColor:
                                                styles.progressBarColor,
                                        }}
                                    />
                                </View>
                            </Flex.Item>
                            <Flex.Item
                                style={{
                                    flex: 1,
                                    paddingLeft: 4,
                                    paddingRight: 4,
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{width: 70, height: 80}}
                                    source={require('../../../assets/level.jpg')}
                                />
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </View>
            </Card.Body>
            <Card.Footer
                content={
                    <View
                        style={{
                            height: 50,
                            backgroundColor: 'white',
                        }}>
                        <Flex
                            justify="center"
                            align="center"
                            style={{height: '100%'}}>
                            {functionButtons}
                        </Flex>
                    </View>
                }
            />
        </Card>
    );
}

export default BikeLevelCard;
