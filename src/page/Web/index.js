import React, {useContext, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import * as Progress from 'react-native-progress';

function Web(props) {
    const route = useRoute();
    const webView = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showLoadingProgress, setShowLoadingProgress] = useState(true);

    useEffect(() => {
        props.navigation.addListener('beforeRemove', (e) => {
            if (!webView.current.canGoBack) {
                return;
            }
            e.preventDefault();
            webView.current.goBack();
        });
    }, [props.navigation]);

    return (
        <View style={{flex: 1}}>
            <Progress.Bar
                progress={loadingProgress}
                width={null}
                height={showLoadingProgress ? 2 : 0}
                color={'orange'}
                borderRadius={0}
                borderWidth={0}
            />
            <WebView
                ref={webView}
                source={{
                    uri: props.uri || (route.params && route.params.uri) || '',
                }}
                startInLoadingState={true}
                onNavigationStateChange={(navState) => {
                    // Keep track of going back navigation within component
                    // console.log('[onNavigationStateChange]', navState);
                    webView.current.canGoBack = navState.canGoBack;
                    const title =
                        navState.title.indexOf('http') >= 0
                            ? '滴滴出行'
                            : navState.title;
                    props.navigation.setOptions({headerTitle: title});
                }}
                onLoadProgress={({nativeEvent}) => {
                    // console.log('[onLoadProgress]', nativeEvent);
                    if (nativeEvent.progress === 1) {
                        setShowLoadingProgress(false);
                    } else {
                        setShowLoadingProgress(true);
                        setLoadingProgress(nativeEvent.progress);
                    }
                }}
            />
        </View>
    );
}

export default Web;
