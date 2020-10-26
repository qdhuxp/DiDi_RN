import React from 'react';
import {Button, Flex, Progress} from '@ant-design/react-native';
import {Image, Text, View} from 'react-native';

function MemberCard(props) {
    const functionButtons = [
        {
            icon: require('../../../assets/btn_coupon.jpg'),
            text: '生日礼遇',
        },
        {
            icon: require('../../../assets/btn_accelerate.jpg'),
            text: '点滴行程保',
        },
        {
            icon: require('../../../assets/btn_compensation.jpg'),
            text: '骑行礼包',
        },
        {
            icon: require('../../../assets/btn_fee_reduce.jpg'),
            text: '套餐折扣',
        },{
            icon: require('../../../assets/btn_fee_reduce.jpg'),
            text: '更多权益',
        }
    ].map((item) => {
        return (
            <Flex.Item key={item.text} style={{flex: 1, alignItems: 'center'}}>
                <Image source={item.icon} style={{height: 20, width: 20}} />
                <Text style={{fontSize: 10, color: '#7B7054'}}>{item.text}</Text>
            </Flex.Item>
        );
    });

    return (
        <View>
            <View
                style={{
                    border: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    padding: 10,
                    color: '#080000',
                    backgroundColor: '#F3DAB1',
                }}>
                <Text style={{fontSize: 12, marginBottom: 10}}>
                    有效期至2020.11.30
                </Text>
                <Text
                    style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>
                    黄金会员
                </Text>
                <Text style={{fontSize: 12, marginBottom: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>185</Text>
                    /300 本月还差115橙长值升级，享免费升舱权益
                </Text>
                <Progress
                    percent={65}
                    style={{
                        backgroundColor: '#84786C',
                        height: 2,
                        marginBottom: 20,
                    }}
                    barStyle={{
                        borderColor: '#060000',
                        // height: 2,
                        borderBottomWidth: 2,
                    }}
                />
                <View
                    style={{
                        height: 30,
                        marginBottom: 0,
                    }}>
                    <Flex
                        justify="center"
                        align="center"
                        style={{height: '100%'}}>
                        {functionButtons}
                    </Flex>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#EDD3A7',
                    height: 40,
                    padding: 10,
                    borderBottomLeftRadius: 5,
                    borderBottomEndRadius: 5,
                }}>
                <Flex
                    justify="end"
                    align="center"
                    style={{height: '100%', width: '100%'}}>
                    {/*<Flex.Item>*/}
                    <Button
                        size="small"
                        style={{
                            fontSize: 10,
                            fontcolor: '#7B7054',
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                        }}>
                        限时抽1折打车券、iPad ->
                    </Button>
                    {/*</Flex.Item>*/}
                </Flex>
            </View>
        </View>
    );
}

export default MemberCard;
