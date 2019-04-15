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
    Right, H2, Tabs, Tab, Body, Thumbnail
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, ScrollView,} from 'react-native';
import CompleteComponent from '../counter/CompleteComponent'

import FooterNavigation from "../component/footerNavigation";

I18nManager.forceRTL(true);

export default class Cart extends Component {
    constructor() {
        super();
    }

    render() {
        const {goBack} = this.props.navigation;
        const uri = "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2017/06/main/quinoa-bowls-avocado-egg-108p68.jpg?itok=MVkxuumL";
        return (
            <Container style={styles.body}>
                <Header hasTabs iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Right>
                        <Button transparent onPress={() => goBack()}>
                            <Icon style={styles.iconHeaderColor} name='arrow-back'/>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.titleBoxOne}>
                    <H2 style={styles.txtTitleOne}>
                        سبد خرید
                    </H2>
                </View>

                <Content style={styles.container}>
                    <Card style={{flex: 1, marginLeft: "10%", height: 100, borderRadius: 5}}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Body style={{paddingLeft:45}}>
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
                                    style={{height: 80, justifyContent: "flex-start", width: "100%", borderRadius: 7}}
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
                                    height:25,
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


                <View style={{padding:15,flex:1}}>
                    {/* title box*/}
                    <View style={{flex:1,  justifyContent: 'space-between', flexDirection: 'row',}}>
                        <H2 style={styles.titleNormal}>
                            میوه فروشی
                        </H2>
                        <H2 style={styles.titleNormal}>
                            میوه فروشی
                        </H2>
                    </View>
                    <View style={{flex:1,  justifyContent: 'space-between', flexDirection: 'row',}}>
                        <H2 style={styles.titleNormal}>
                            میوه فروشی
                        </H2>
                        <H2 style={styles.titleNormal}>
                            میوه فروشی
                        </H2>
                    </View>
                    <View style={{flex:1,  justifyContent: 'space-between', flexDirection: 'row',}}>
                        <H2 style={styles.titleNormal}>
                            میوه فروشی
                        </H2>
                        <H2 style={styles.titleNormal}>
                            میوه فروشی
                        </H2>
                    </View>
                    {/* card button */}
                    <Card style={[styles.cardBorderButton]}>
                        <Button
                            block
                            style={[styles.btnPrimary, styles.btnColorPrimary]}
                            onPress={() =>{
                                this.props.navigation.navigate('Verify');
                            }}>
                            <Text style={styles.txtBtn}>{strings.msg.continueShopping}</Text>
                        </Button>
                    </Card>
                </View>

                <FooterNavigation/>
            </Container>
        );
    }
}