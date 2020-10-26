import React, {useState, useEffect, useContext} from 'react';
import {Provider, TabBar, Tabs} from '@ant-design/react-native';
import {ScrollView, StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Bike from '../Bike';
import Taxi from '../Taxi';
import Header from '../../component/Header';
import {SystemContext} from '../../../Context';

function Home(props) {
    const tabs = [
        {title: '青桔骑行'},
        {title: '打车'},
        {title: '拉货搬家'},
        {title: '特惠来了'},
        // {title: '顺风车'},
        // {title: '金融服务'},
        // {title: '青菜拼车'},
        // {title: '公交'},
        // {title: '租/买车'},
        // {title: '代驾'},
        // {title: '导航'},
        // {title: '电单车'},
        // {title: '跑腿'},
    ];

    const {setSystemNavigator} = useContext(SystemContext);
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        setSystemNavigator(props.navigation);
    }, []);

    function onChangeTab(index) {
        setSelectedTab(index);
    }

    const style = {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        backgroundColor: '#fff',
    };

    return (
        <Provider>
            {/*<SafeAreaView style={{flex: 1, height: '100%'}}>*/}
            <View style={{flex: 1, height: '100%'}}>
                {/*<StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent"/>*/}
                {/*<Header />*/}

                <Tabs
                    tabs={tabs}
                    initialPage={0}
                    swipeable={false}
                    useOnPan={false}
                    usePaged={false}
                    tabBarPosition="top"
                    tabBarActiveTextColor="#FF6100"
                    tabBarInactiveTextColor="black"
                    tabBarUnderlineStyle={{
                        backgroundColor: '#FF6100',
                    }}>

                    <View style={{flex: 1}}>
                        <Taxi />
                    </View>
                    <View style={{flex: 1}}>
                        <Bike />
                    </View>
                    <ScrollView style={{backgroundColor: 'red'}}>
                        <View style={style}>
                            <Text>Content of First Tab</Text>
                        </View>
                    </ScrollView>
                    <ScrollView style={{backgroundColor: '#fff'}}>
                        <View style={style}>
                            <Text>Content of First Tab</Text>
                        </View>
                    </ScrollView>
                </Tabs>
                <Header />
            </View>
            {/*</SafeAreaView>*/}
        </Provider>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default Home;
