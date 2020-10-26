import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';
import {Flex, WhiteSpace} from '@ant-design/react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import ADCard from '../../../component/ADCard';
import CarUse from './CarUse';
import MemberCard from './MemberCard';
// import SafeCenter from './SafeCenter';
import {SystemContext} from '../../../../Context';
import SafeCenterButton from '../../../component/SafeCenterButton';
import MyPositionButton from '../../../component/MyPositionButton';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function TaxiFloatPanel(props) {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const deviceHeight = Dimensions.get('window').height;
    const slidingUpPanelProps = {
        top: deviceHeight + 250 - 60,
        bottom: 250,
    };
    const [slidingUpPanel, setSlidingUpPanel] = useState(null);
    const [momentumDragValue, setMomentumDragValue] = useState(
        slidingUpPanelProps.bottom,
    );
    const [scrollView, setScrollView] = useState(null);
    const [isSafeCenterHidden, setSafeCenterHidden] = useState(true);
    const {showHeader, setShowHeader} = useContext(SystemContext);

    const styles = {
        container: {
            flex: 1,
            backgroundColor: '#F4F4F4',
            paddingLeft: 10,
            paddingRight: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
    };

    useEffect(() => {
        if (slidingUpPanel) {
            slidingUpPanel.hide(); // 100
        }
    }, [slidingUpPanel]);

    useEffect(() => {
        // console.log('[TaxiPage]', isFocused);
        if (!slidingUpPanel || !isFocused) {
            return;
        }
        if (showHeader) {
            setTimeout(() => {
                slidingUpPanel.hide();
                setMomentumDragValue(slidingUpPanelProps.bottom);
                scrollView.scrollTo({x: 0, y: 0, animated: true});
            }, 0);
        } else {
            // setTimeout(() => {
            slidingUpPanel.show(slidingUpPanelProps.top);
            setMomentumDragValue(slidingUpPanelProps.top);
            // }, 0);
        }
    }, [showHeader]);

    function onSlidePanelMomentumDragStart(pos) {
        // console.log('[onSlidePanelMomentumDragStart]', pos);
        if (pos < momentumDragValue) {
            setShowHeader(true);
        } else if (pos > momentumDragValue) {
            setShowHeader(false);
        }
    }

    return (
        <View>
            <SlidingUpPanel
                ref={(panel) => setSlidingUpPanel(panel)}
                // onDragEnd={onSlidePanelDragEnd}
                onMomentumDragStart={onSlidePanelMomentumDragStart}
                // animatedValue={slidingUpPanelAnimatedValue}
                snappingPoints={[360]}
                height={slidingUpPanelProps.top}
                friction={0.8}
                // showBackdrop={true}
                draggableRange={{
                    top: slidingUpPanelProps.top,
                    bottom: slidingUpPanelProps.bottom,
                }}>
                <View style={{flex: 1}}>
                    <View
                        style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                        }}>
                        <Flex justify="between">
                            <SafeCenterButton
                                onPress={() =>
                                    navigation.navigate('SafeCenter')
                                }
                            />
                            <MyPositionButton />
                        </Flex>
                    </View>
                    <WhiteSpace size="lg" />
                    <View
                        style={{
                            ...styles.container,
                        }}>
                        <CarUse />
                        <WhiteSpace size="lg" />
                        <ScrollView
                            ref={(view) => {
                                setScrollView(view);
                            }}
                            alwaysBounceVertical={true}
                            // style={{flex: 1}}
                            onScrollEndDrag={({nativeEvent}) => {
                                if (nativeEvent.contentOffset.y === 0) {
                                    setShowHeader(true);
                                }
                            }}>
                            <ADCard
                                title={'有券，速来'}
                                text={'查收你的优惠券'}
                                buttonName="立即领取"
                                icon={require('../../../assets/coupon1.jpg')}
                            />
                            <WhiteSpace size="sm" />

                            <ADCard
                                title={'小酌不贪杯，醉酒不独行'}
                                text={'醉酒乘车\n需清醒亲友陪同'}
                                buttonName="现在查收"
                                icon={require('../../../assets/drink.jpg')}
                            />
                            <WhiteSpace size="sm" />

                            <View>
                                <Image
                                    source={require('../../../assets/ad.jpg')}
                                    style={{
                                        width: '100%',
                                        height: 155,
                                        borderRadius: 5,
                                    }}
                                />
                            </View>
                            <WhiteSpace size="sm" />

                            <MemberCard />
                            <WhiteSpace size="sm" />

                            <ADCard
                                text={'滴滴平台\n证照信息公示'}
                                buttonName="查看详情"
                                icon={require('../../../assets/zhengjian.jpg')}
                            />
                            <WhiteSpace size="lg" />
                        </ScrollView>
                    </View>
                </View>
            </SlidingUpPanel>
        </View>
    );
}

export default TaxiFloatPanel;
