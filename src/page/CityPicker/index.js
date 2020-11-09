import React, {useRef, useState, useContext} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';
import {LargeList} from 'react-native-largelist-v3';

import {useNavigation} from '@react-navigation/native';
import {SystemContext} from '../../../Context';

function CityPicker(props) {
    const navigation = useNavigation();
    const ListRef = useRef(null);
    const {currentLocation} = useContext(SystemContext);

    const styles = StyleSheet.create({
        search: {
            margin: 10,
            width: 200,
            flex: 2,
            backgroundColor: '#EEE',
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
        },
        empty: {
            marginVertical: 20,
            alignSelf: 'center',
        },
        section: {
            flex: 1,
            backgroundColor: '#EEE',
            justifyContent: 'center',
        },
        sectionText: {
            fontSize: 20,
            marginLeft: 10,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#EEE',
        },
        image: {marginLeft: 16, width: 44, height: 44},
        rContainer: {
            marginLeft: 10,
            // marginRight: 20,
            // width: '100%',
        },
        // title: {fontSize: 18},
        subtitle: {fontSize: 14, marginTop: 8},
    });

    const cityData = require('./city').city;

    const [cityList, setCityList] = useState(cityData);

    const AlphabetaList = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        // 'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        // 'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        // 'U',
        // 'V',
        'W',
        'X',
        'Y',
        'Z',
    ].map((item, index) => {
        return (
            <TouchableOpacity
                key={item}
                onPress={() => {
                    ListRef.current.scrollToIndexPath(
                        {section: index, row: -1},
                        true,
                    );
                }}>
                <Text>{item}</Text>
            </TouchableOpacity>
        );
    });
    function searchBar() {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    height: 80,
                    paddingTop: 20,
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyItems: 'between',
                }}>
                <TextInput
                    style={styles.search}
                    placeholder="城市中文名或拼音"
                    onSubmitEditing={search}
                    returnKeyType="done"
                />
                <TouchableNativeFeedback
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Text> 取消 </Text>
                </TouchableNativeFeedback>
            </View>
        );
    }

    function renderHeader() {
        return (
            <View
                style={{
                    height: 50,
                    justifyContent: 'center',
                    padding: 10,
                    backgroundColor: 'white',
                }}>
                <Text>
                    {'当前定位城市：' + currentLocation.addressComponent.city}
                </Text>
            </View>
        );
    }
    function renderEmpty() {
        return (
            <View style={styles.empty}>
                <Text>No results found</Text>
            </View>
        );
    }

    function renderSection(section: number) {
        const city = cityList[section];
        return (
            <TouchableOpacity style={styles.section}>
                <Text style={styles.sectionText}>{city.header}</Text>
            </TouchableOpacity>
        );
    }

    function renderItem({section: section, row: row}) {
        const city = cityList[section].items[row];
        return (
            <TouchableOpacity style={styles.row} onPress={() => {}}>
                <View style={styles.rContainer}>
                    <Text style={styles.title}>{city.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function search({nativeEvent: {text: text}}) {
        let indexPath;
        const notFound = cityData.every((section, sIndex) => {
            if (section.header.toLowerCase() === text) {
                indexPath = {section: sIndex, row: -1};
                return false;
            }
            return section.items.every((city, cIndex) => {
                if (city.name === text || city.pinyin === text) {
                    indexPath = {section: sIndex, row: cIndex - 1};
                    return false;
                }
                return true;
            });
        });
        console.log(text, notFound, indexPath);
        if (!notFound) {
            ListRef.current.scrollToIndexPath(indexPath, true);
        }
    }

    return (
        <>
            {searchBar()}
            <View style={{height: 30, justifyContent: 'center', padding: 20}}>
                <Text>
                    {'当前定位城市：' + currentLocation.addressComponent.city}
                </Text>
            </View>
            <LargeList
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    elevation: 6,
                    borderWidth: 0,
                }}
                ref={ListRef}
                heightForSection={() => 40}
                renderSection={renderSection}
                heightForIndexPath={() => 40}
                renderIndexPath={renderItem}
                // renderHeader={renderHeader}
                data={cityList}
                headerStickyEnabled
                initialContentOffset={{x: 0, y: 0}}
                renderEmpty={renderEmpty}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 160,
                    right: 30,
                    zIndex: 100,
                    elevation: 100, // works on android
                }}>
                {AlphabetaList}
            </View>
        </>
    );
}

export default CityPicker;
