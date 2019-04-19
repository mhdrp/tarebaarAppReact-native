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
    Right, H2, Tabs, Tab, Body, Thumbnail, H3
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, ScrollView, TouchableOpacity,} from 'react-native';
import CompleteComponent from '../counter/CompleteComponent'

import CustomIcon from '../icons/CustomIcon'

I18nManager.forceRTL(true);

export default class CheckOut extends Component {
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


                <Content style={styles.container}
                         showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}
                >

                    <View style={styles.titleBoxOne}>
                        <H2 style={styles.txtTitleOne}>
                            سبد خرید
                        </H2>
                    </View>

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
                                    style={{height: 80, justifyContent: "flex-start", width: "100%", borderRadius: 7}}
                                    square source={{uri: uri}}/>
                            </View>
                            <Text style={{
                                color: strings.color.title,
                                fontFamily: strings.font.medium,
                                fontSize: strings.size.normalText,
                                marginBottom: 20
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
                                    fontSize: strings.size.smallText,
                                }}>
                                    13,000 {strings.msg.toman}

                                </Text>
                                <Text style={{
                                    textAlign: "right",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>
                                    2 عدد
                                </Text>

                                <Text style={{
                                    textAlign: "left",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>
                                    26,000 {strings.msg.toman}
                                </Text>
                                <View style={{

                                    textAlign: "right",
                                    lineHeight: 24,
                                    height: 25,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>

                                </View>


                            </View>
                            </Body>
                        </CardItem>
                    </Card>
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
                                    style={{height: 80, justifyContent: "flex-start", width: "100%", borderRadius: 7}}
                                    square source={{uri: uri}}/>
                            </View>
                            <Text style={{
                                color: strings.color.title,
                                fontFamily: strings.font.medium,
                                fontSize: strings.size.normalText,
                                marginBottom: 20
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
                                    fontSize: strings.size.smallText,
                                }}>
                                    13,000 {strings.msg.toman}

                                </Text>
                                <Text style={{
                                    textAlign: "right",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>
                                    2 عدد
                                </Text>

                                <Text style={{
                                    textAlign: "left",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>
                                    26,000 {strings.msg.toman}
                                </Text>
                                <View style={{

                                    textAlign: "right",
                                    lineHeight: 24,
                                    height: 25,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>

                                </View>


                            </View>
                            </Body>
                        </CardItem>
                    </Card>
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
                                    style={{height: 80, justifyContent: "flex-start", width: "100%", borderRadius: 7}}
                                    square source={{uri: uri}}/>
                            </View>
                            <Text style={{
                                color: strings.color.title,
                                fontFamily: strings.font.medium,
                                fontSize: strings.size.normalText,
                                marginBottom: 20
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
                                    fontSize: strings.size.smallText,
                                }}>
                                    13,000 {strings.msg.toman}

                                </Text>
                                <Text style={{
                                    textAlign: "right",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>
                                    2 عدد
                                </Text>

                                <Text style={{
                                    textAlign: "left",
                                    lineHeight: 24,
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>
                                    26,000 {strings.msg.toman}
                                </Text>
                                <View style={{

                                    textAlign: "right",
                                    lineHeight: 24,
                                    height: 25,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: strings.color.primary,
                                    fontFamily: strings.font.medium,
                                    fontSize: strings.size.smallText,
                                }}>

                                </View>


                            </View>
                            </Body>
                        </CardItem>
                    </Card>

                    {/* title box*/}
                    <View style={styles.titleListAddress}>
                        <H2 style={styles.titleNormal}>
                            {strings.msg.listAddress}
                        </H2>
                        <Button transparent small
                                onPress={() => (Alert.alert("test"))}
                        >
                            <Text style={styles.txtMorePrimary}>
                                {strings.msg.addAddress}
                            </Text>
                        </Button>
                    </View>


                    {/* list address */}
                    <ScrollView
                        horizontal={true}
                    >

                        <Card style={styles.cardBorderRadius}>
                            <CardItem style={styles.cardBorderRadius}>
                                <Body>

                                <View style={{
                                    flex: 1,
                                    maxWidth: 230,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}>
                                    <View style={{justifyContent: 'space-between', flexDirection: 'column',      padding: 7, }}>

                                        <H3 style={[styles.txtMorePrimary, styles.mgBottom10]}>
                                            خیابان شریعتی,ابتدای پل صدر خ مصطفی

                                        </H3>
                                        <H3 style={styles.txtMore}>
                                            پلاک ۱۳ واحد ۱
                                        </H3>

                                    </View>
                                    {/*button edit address */}
                                    <TouchableOpacity
                                        onPress={() => (Alert.alert("test"))}
                                    >
                                        <View style={{

                                            padding: 10,
                                            alignItems: 'center',
                                            alignSelf: 'center',
                                            justifyContent: 'center',

                                        }}>
                                            <CustomIcon style={styles.iconFooterTab} size={18} name="edit-3"/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={styles.cardBorderRadius}>
                            <CardItem style={styles.cardBorderRadius}>
                                <Body>

                                <View style={{
                                    flex: 1,
                                    maxWidth: 230,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}>
                                    <View style={{justifyContent: 'space-between', flexDirection: 'column',      padding: 7, }}>

                                        <H3 style={[styles.txtMorePrimary, styles.mgBottom10]}>
                                            خیابان شریعتی,ابتدای پل صدر خ مصطفی

                                        </H3>
                                        <H3 style={styles.txtMore}>
                                            پلاک ۱۳ واحد ۱
                                        </H3>

                                    </View>
                                    {/*button edit address */}
                                    <TouchableOpacity
                                        onPress={() => (Alert.alert("test"))}
                                    >
                                        <View style={{

                                            padding: 10,
                                            alignItems: 'center',
                                            alignSelf: 'center',
                                            justifyContent: 'center',

                                        }}>
                                            <CustomIcon style={styles.iconFooterTab} size={18} name="edit-3"/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                </Body>
                            </CardItem>
                        </Card>


                    </ScrollView>
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

                </Content>

                <View style={styles.container}>
                    {/* card button */}

                    <Card style={[styles.cardBorderButton]}>
                        <Button
                            block
                            style={[styles.btnPrimary, styles.btnColorPrimary]}
                            onPress={() => {
                                this.props.navigation.navigate('Verify');
                            }}>
                            <Text style={styles.txtBtn}>{strings.msg.continueShopping}</Text>
                        </Button>
                    </Card>
                </View>


            </Container>
        );
    }
}