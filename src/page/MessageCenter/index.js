import React, {useState} from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Left,
    Right,
    Icon,
    Button,
    Body,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

function MessageCenter(props) {
    const navigation = useNavigation();

    const adMessages = [
        {
            category: '活动公告',
            link: '',
            data: [
                {
                    text: '邀好友助力，得8元立减券',
                    link: '',
                },
                {
                    text: '邀友做司机 限时拿奖励',
                    link: '',
                },
            ],
        },
        {
            category: '抢车位',
            link: '',
            data: [
                {
                    text: '快来停车赚金币吧~',
                    link: '',
                },
            ],
        },
    ].map((item, categoryIndex) => {
        const list = item.data.map((item, index) => {
            return (
                <ListItem
                    key={categoryIndex + '_' + index}
                    onPress={() => {
                        navigation.navigate('Web', {uri: item.link});
                    }}>
                    <Left>
                        <Text>{item.text}</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            );
        });
        return (
            <>
                <ListItem key={categoryIndex + '_divider'} itemDivider />
                <ListItem
                    key={'adMessages' + categoryIndex}
                    icon
                    onPress={() => {
                        navigation.navigate('Web', {uri: item.link});
                    }}>
                    <Left>
                        <Button style={{backgroundColor: '#FF9501'}}>
                            <Icon active name="airplane" />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{fontSize: 14}}>{item.category}</Text>
                    </Body>
                    <Right>
                        <Text style={{fontSize: 12}}>1小时以前</Text>
                    </Right>
                </ListItem>
                {list}
            </>
        );
    });

    return (
        <Container>
            <Content>
                <List>{adMessages}</List>
            </Content>
        </Container>
    );
}

export default MessageCenter;
