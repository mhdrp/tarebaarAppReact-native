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
    Input, Thumbnail
} from 'native-base'
import {I18nManager, Image, Alert, View, TouchableHighlight, Dimensions, FlatList} from 'react-native';
import styles from '../styles'
import strings from '../strings'
import CustomIcon from '../icons/CustomIcon'
import {Rating} from "react-native-ratings";
import CompleteComponent from '../counter/CompleteComponent'

I18nManager.forceRTL(true);

export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            GridListItems: [
                {key: "1", name: "چیز برگر فرانسوی", price: 1000, priceOff: 900},
                {key: "2", name: "چیز برگر", price: 2000, priceOff: 15000},
                {key: "3", name: "پیتزا پپرونی", price: 4000, priceOff: 3900},


            ]
        };
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        const {goBack} = this.props.navigation;
        const win = Dimensions.get('window');
        return (
            <Container style={styles.body}>

                <Header iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <CustomIcon style={styles.iconHeader} name='chevron-right'/>
                        </Button>
                    </Left>
                    <Body>

                    <View style={styles.titleHeader}>
                        <CustomIcon style={styles.iconTitleHeader} name='map-pin'/>
                        <Text style={styles.txtTitleHeader}>خیابان شریعتی </Text>
                    </View>
                    {/*  <Title >
                                <Icon style={styles.iconTitleHeader} name='pin'/>
                                خیابان شریعتی
                            </Title>*/}
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Messages')}>
                            <CustomIcon style={[styles.iconHeader, styles.colorPrimary]} name='alert-circle'/>
                        </Button>
                    </Right>
                </Header>

                <Content>


                    <View style={styles.container}>

                        {/*image and name store*/}
                        <View style={styles.titleStore}>
                            <View>
                                <Image
                                    style={styles.imgStore}
                                    source={require('../assets/banner.jpg')}/>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}>
                                <H2 style={styles.txtTitleOne}>
                                    فروشگاه پیش فرض
                                </H2>

                            </View>
                        </View>

                        {/*image and name store*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                            marginBottom: 10,
                            justifyContent: 'space-between',
                        }}>
                            <View style={styles.itemRow}>
                                <CustomIcon
                                    style={[styles.itemIcon, styles.colorStar]} name='star'/>
                                <H2 style={styles.txtMore}>
                                    (250) 4,9
                                </H2>
                            </View>
                            <View style={styles.itemRow}>
                                <CustomIcon
                                    style={[styles.itemIcon, styles.colorPrimary]} name='dollar-sign'/>
                                <H2 style={styles.txtMore}>
                                    تخفیف تا ۱۰٪
                                </H2>

                            </View>
                            <View style={styles.itemRow}>
                                <CustomIcon
                                    style={[styles.itemIcon, styles.colorPrimary]} name='truck1'/>
                                <H2 style={styles.txtMore}>
                                    ارسال رایگان
                                </H2>

                            </View>
                        </View>

                        {/* search box*/}
                        <View style={styles.searchBox}>
                            <Button transparent style={{flex: 1}}>
                                <Icon style={styles.iconSearchBox} name='search'/>
                            </Button>
                            <View style={styles.itemInputSearch}>

                                <Input style={[styles.txtInputSearch]}
                                       placeholderTextColor={strings.color.txtPlaceInput}
                                       placeholder={strings.msg.search}/>
                            </View>
                        </View>

                        {/* txt */}
                        <View>
                            <FlatList
                                data={this.state.GridListItems}
                                renderItem={({item}) =>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        textAlign: 'right',
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        marginRight: 10,
                                        marginLeft: 10,
                                        borderBottomWidth: 1,
                                        borderColor: strings.color.borderColor
                                    }}>

                                        <View>
                                            <Thumbnail
                                                style={{
                                                    height: 80,
                                                    justifyContent: "flex-start",
                                                    width: 80,
                                                    marginRight: 10, marginLeft: 10,
                                                    borderRadius: 7
                                                }}
                                                square source={require('../assets/banner.jpg')}/>
                                        </View>
                                        <View style={styles.column}>
                                            <H2 style={{
                                                color: strings.color.title,
                                                fontFamily: strings.font.medium,
                                                fontSize: strings.size.normalText,
                                                textAlign:"right",
                                                alignSelf:"flex-start"
                                            }}>
                                                {item.name}
                                            </H2>

                                            <View style={{
                                                flex:1,
                                                justifyContent: 'space-between',
                                                alignContent: "center",
                                                flexDirection: 'row',
                                            }}>

                                                <View style={[styles.column,styles.rightText,styles.noSpaceBetween]}>
                                                    <Text style={{
                                                        color: strings.color.text,
                                                        fontFamily: strings.font.light,
                                                        fontSize: strings.size.smallerText,
                                                    }}>
                                                        13,000 {strings.msg.toman}
                                                    </Text>
                                                    <Text style={{
                                                        color: strings.color.primary,
                                                        fontFamily: strings.font.light,
                                                        fontSize: strings.size.smallText,
                                                    }}>
                                                        13,000 {strings.msg.toman}
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    textAlign: "right",
                                                    lineHeight: 24,
                                                    height:25,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: strings.color.primary,
                                                    fontFamily: strings.font.medium,
                                                    fontSize: strings.size.smallerText,
                                                }}>
                                                    <View>
                                                        <CompleteComponent/>
                                                    </View>
                                                </View>


                                            </View>
                                        </View>

                                    </View>

                                }
                                numColumns={1}
                            />
                        </View>

                    </View>


                </Content>

            </Container>
        );
    }
}