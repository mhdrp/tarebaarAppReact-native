import React, {Component} from 'react';
import {
    Content,
    Container,
    Button,
    Text,
    Card,
    CardItem,
    Icon,
    Header,
    Right, H2, Tabs, Tab, Body, Thumbnail, Left, H3
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, ScrollView, StatusBar,} from 'react-native';
import CompleteComponent from '../counter/CompleteComponent'

import FooterNavigation from "../component/footerNavigation";
import CustomIcon from "../icons/CustomIcon";
import Loading from "../component/loading";
import Drawer from "react-native-drawer";

I18nManager.forceRTL(true);

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            stateLoading: true,
        };
    }

    loading() {
        setTimeout(() => {
            this.setState({
                stateLoading: false,
            })
        }, 1000)
    }

    componentDidMount() {
        this.loading();
    }

    render() {
        const {goBack} = this.props.navigation;
        const uri = "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2017/06/main/quinoa-bowls-avocado-egg-108p68.jpg?itok=MVkxuumL";
        return (
            <Container style={styles.body}>
                {this.state.stateLoading ? <Loading/> : null}
                <Header iosBarStyle={"dark-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}/>

                <View style={styles.titleBoxOne}>
                    <H2 style={styles.txtTitleOne}>
                        سبد خرید
                    </H2>
                </View>


                <View style={{flex: 1}}>

                    <View style={{flex: 6}}>
                        <Content style={styles.container}
                                 showsHorizontalScrollIndicator={false}
                                 showsVerticalScrollIndicator={false}
                        >
                            <Card style={{flex: 1, marginLeft: "10%", height: 100, borderRadius: 5}}>
                                <CardItem style={styles.cardBorderRadius}>
                                    <Body style={{paddingLeft: 45}}>
                                    <View style={{
                                        position: 'absolute',
                                        top: -2,
                                        left: -55,
                                        width: 85,
                                        height: 80,
                                        borderRadius: 7,
                                        elevation: 1,
                                    }}>
                                        <Thumbnail
                                            style={{
                                                height: 80,
                                                justifyContent: "flex-start",
                                                width: "100%",
                                                borderRadius: 7
                                            }}
                                            square source={{uri: uri}}/>
                                    </View>
                                    <Text style={{
                                        color: strings.color.title,
                                        fontFamily: strings.font.medium,
                                        fontSize: strings.size.normalText,
                                    }}>
                                        پاستا آلفردو
                                    </Text>

                                    <View style={{
                                        width: "100%",
                                        justifyContent: 'space-between',
                                        alignContent: "center",
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            color: strings.color.text,
                                            fontFamily: strings.font.light,
                                            fontSize: strings.size.smallerText,
                                        }}>
                                            13,000 {strings.msg.toman}
                                        </Text>
                                        {/*     <Text style={{
                                    textAlign: "right",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallerText,
                                }}>
                                    26,000 {strings.msg.toman}
                                </Text>*/}
                                        <View style={{
                                            textAlign: "right",
                                            lineHeight: 24,
                                            height: 25,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: strings.color.primary,
                                            fontFamily: strings.font.medium,
                                            fontSize: strings.size.smallerText,
                                        }}>
                                            <CompleteComponent/>
                                        </View>


                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>


                        </Content>

                    </View>
                    <View style={{flex: 2}}>
                        <View style={{padding: 15, flex: 1}}>
                            {/* title box*/}
                            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row',}}>
                                <H2 style={styles.txtMore}>
                                    {strings.msg.cart.TotalPriceOfOrders}
                                </H2>
                                <H3 style={styles.txtMore}>
                                    72,000 {strings.msg.toman}
                                </H3>
                            </View>
                            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row',}}>
                                <H2 style={styles.txtMore}>
                                    {strings.msg.cart.discount}
                                </H2>
                                <H3 style={styles.txtMore}>
                                    2,000 {strings.msg.toman}
                                </H3>
                            </View>
                            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row',}}>
                                <H2 style={styles.titleNormal}>
                                    {strings.msg.cart.totalPrice}
                                </H2>
                                <H3 style={styles.txtMorePrimary}>
                                    70,000 {strings.msg.toman}
                                </H3>
                            </View>

                        </View>
                    </View>

                    <View style={{flex: 1, width: "94%",
                        marginLeft: "3%",
                        marginRight: "3%",}}>
                        <Button
                            block
                            style={[styles.btnPrimary, styles.btnColorPrimary]}
                            onPress={() => this.props.navigation.replace('CheckOut')}>
                            <Text style={styles.txtBtn}>{strings.msg.verification}</Text>
                        </Button>
                    </View>


                </View>


                <FooterNavigation cart={strings.color.primary}/>
            </Container>
        );
    }
}