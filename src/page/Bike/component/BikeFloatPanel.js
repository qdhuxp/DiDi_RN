import React, {useEffect, useState, useContext, useRef} from 'react';
import {
    Animated,
    Dimensions,
    ScrollView,
    View,
    InteractionManager,
} from 'react-native';
import {Button, Flex, WhiteSpace} from '@ant-design/react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import BikeLevelCard from './BikeLevelCard';
import ADCard from '../../../component/ADCard';
import {SystemContext} from '../../../../Context';
import MyPositionButton from '../../../component/MyPositionButton';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function BikeFloatPanel(props) {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const slidingUpPanelProps = {
        top: Dimensions.get('window').height + 15,
        bottom: 145,
    };
    const slidingUpPanel = useRef(null);
    const scrollView = useRef(null);
    // const [slidingUpPanel, setSlidingUpPanel] = useState(null);
    const [momentumDragValue, setMomentumDragValue] = useState(0);
    // const [scrollView, setScrollView] = useState(null);
    const {showHeader, setShowHeader} = useContext(SystemContext);

    const styles = {
        container: {
            flex: 1,
            backgroundColor: '#F4F4F4',
            paddingLeft: 10,
            paddingRight: 10,
        },
    };

    useEffect(() => {
        if (slidingUpPanel) {
            slidingUpPanel.current.hide(); // 100
        }
    }, [slidingUpPanel]);

    useEffect(() => {
        // console.log('[BikePage]', isFocused, showHeader);
        if (!slidingUpPanel || !isFocused) {
            return;
        }
        if (showHeader) {
            setTimeout(() => {
                slidingUpPanel.current.hide();
                setMomentumDragValue(slidingUpPanelProps.bottom);
                scrollView.current.scrollTo({x: 0, y: 0, animated: true});
            }, 0);
        } else {
            // setTimeout(() => {
            slidingUpPanel.current.show(slidingUpPanelProps.top);
            setMomentumDragValue(slidingUpPanelProps.top);
            // }, 0);
        }
    }, [showHeader]);

    function onSlidePanelDragEnd(position, gestureState) {
        // console.log(position,gestureState)
        if (gestureState.dy < 0) {
            setShowHeader(false);
        }
    }

    function onSlidePanelMomentumDragStart(pos) {
        // console.log('Bike [onSlidePanelMomentumDragStart]', pos, momentumDragValue);
        if (pos < momentumDragValue) {
            setShowHeader(true);
        } else if (pos > momentumDragValue) {
            setShowHeader(false);
        }
    }

    return (
        <View>
            <SlidingUpPanel
                key={'BikeFloatPanel'}
                ref={slidingUpPanel}
                onDragEnd={onSlidePanelDragEnd}
                onMomentumDragStart={onSlidePanelMomentumDragStart}
                animatedValue={new Animated.Value(150)}
                snappingPoints={[360]}
                height={slidingUpPanelProps.top}
                friction={0.8}
                draggableRange={{
                    top: slidingUpPanelProps.top,
                    bottom: slidingUpPanelProps.bottom,
                }}>
                <View style={{flex: 1}}>
                    <View
                        style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            justifyItems: 'end',
                        }}>
                        <Flex justify="end">
                            <MyPositionButton />
                        </Flex>
                    </View>
                    <WhiteSpace />
                    <View style={styles.container}>
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: '#4A4C5B',
                                border: 0,
                                borderColor: 'gray',
                                borderRadius: 0,
                            }}
                            onPress={() => {
                                navigation.navigate('QRCodeScan');
                            }}>
                            扫码用车
                        </Button>
                        <WhiteSpace />
                        <ScrollView
                            ref={scrollView}
                            alwaysBounceVertical={true}
                            style={{flex: 1}}
                            onScrollEndDrag={({nativeEvent}) => {
                                if (nativeEvent.contentOffset.y === 0) {
                                    setShowHeader(true);
                                    // slidingUpPanel.hide();
                                    // setMomentumDragValue(
                                    //     slidingUpPanelProps.bottom,
                                    // );
                                }
                            }}>
                            <BikeLevelCard />
                            <WhiteSpace size="sm" />
                            <ADCard
                                text={'5元畅骑30天\n单车月卡优惠5元'}
                                buttonName="立即购卡"
                                icon={require('../../../assets/dandan.jpg')}
                            />
                            <WhiteSpace size="sm" />
                            <ADCard
                                text={'送你4张单单5折券\n7天内骑行享折扣'}
                                buttonName="点击领取"
                                icon={require('../../../assets/yueka.jpg')}
                            />
                            <WhiteSpace size="sm" />
                            <ADCard
                                text={'滴滴平台\n证照信息公示'}
                                buttonName="查看详情"
                                icon={require('../../../assets/zhengjian.jpg')}
                            />
                        </ScrollView>
                    </View>
                </View>
            </SlidingUpPanel>
        </View>
    );
}

export default BikeFloatPanel;
