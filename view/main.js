import React, {Component} from 'react';

import {
    Content,
    Container,
    Button,
    Header,
    Text,
    Footer,
    FooterTab,
    Badge,
    Right,
    Body,
    Left,
    Icon,
    Title,
    Item,
    Card,
    CardItem,
    H2,
    Input
} from 'native-base'
import {I18nManager, Image, Alert, View, ScrollView} from 'react-native';
import styles from '../styles'
import strings from '../strings'

import FooterNavigation from '../component/footerNavigation'
I18nManager.forceRTL(true);

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={styles.body}>

                <Header iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left>
                        <Button transparent>
                            <Icon style={styles.iconHeaderColor} name='menu'/>
                        </Button>
                    </Left>
                    <Body>

                    <View style={styles.titleHeader}>
                        <Icon style={styles.iconTitleHeader} name='pin'/>
                        <Text style={styles.txtTitleHeader}>خیابان شریعتی </Text>
                    </View>
                    {/*  <Title >
                                <Icon style={styles.iconTitleHeader} name='pin'/>
                                خیابان شریعتی
                            </Title>*/}
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon style={styles.iconHeaderColor} name='mail'/>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    {/*search box*/}
                    <View style={styles.container}>
                        <View style={styles.searchBox}>
                            <Button transparent style={{flex: 1}}>
                                <Icon style={styles.iconSearchBox} name='search'/>
                            </Button>
                            <View style={styles.itemInputSearch}>

                                <Input style={[styles.txtInputSearch]}
                                       placeholderTextColor={strings.color.txtPlaceInput}
                                       placeholder={strings.msg.search}/>
                            </View>
                            <Button transparent style={{flex: 1}}>
                                <Icon style={styles.iconSearchBox} name='options'/>
                            </Button>
                        </View>
                    </View>

                    <View>
                        {/* title box*/}
                        <View style={styles.titleBox}>
                            <H2 style={styles.titleNormal}>
                                میوه فروشی
                            </H2>
                            <Button transparent small
                                    onPress={() => (Alert.alert("test"))}
                            >
                                <Text style={styles.txtMore}>
                                    نمایش بیشتر
                                </Text>
                            </Button>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <ScrollView horizontal={true}>
                                {/*          <Card>
                                    <CardItem>
                                        <Body>
                                        </Body>
                                    </CardItem>
                                </Card>*/}

                            </ScrollView>
                        </View>

                    </View>


                </Content>
                <FooterNavigation/>

            </Container>
        );
    }
}