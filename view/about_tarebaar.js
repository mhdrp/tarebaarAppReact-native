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
    Right, H2, Tabs, Tab, Body, Thumbnail, Left, H3, Form, Item, Input
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, ScrollView, StatusBar, TouchableOpacity,} from 'react-native';
import CompleteComponent from '../counter/CompleteComponent'

import FooterNavigation from "../component/footerNavigation";
import CustomIcon from "../icons/CustomIcon";

I18nManager.forceRTL(true);

export default class AboutTarebaar extends Component {
    constructor() {
        super();
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.body}>

                <Header hasTabs iosBarStyle={"dark-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left style={styles.itemRight}>
                        <Button transparent onPress={() => goBack()}>
                            <CustomIcon style={styles.iconHeader} name='chevron-right'/>
                        </Button>
                    </Left>
                </Header>

                <View style={styles.titleBoxOne}>
                    <H2 style={styles.txtTitleOne}>
                        {strings.msg.aboutTarebaar}
                    </H2>
                </View>

                <Content style={styles.container}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {/* title box*/}

                    <Card style={[styles.cardStyle,styles.cardBorderRadius]}>
                        <CardItem style={styles.cardBorderRadius}>


                            <Body style={{padding: 0}}>
                            <View style={{flex: 1, flexDirection: 'column', padding: 0,alignItems:'flex-start'}}>

                                <H3  style={styles.titleNormal}>
                                 {strings.msg.aboutTarebaar}
                                </H3>

                            <Text style={[styles.txtMessages,styles.rtl]}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </View>


                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={[styles.cardStyle,styles.cardBorderRadius]}>
                        <CardItem style={styles.cardBorderRadius}>


                            <Body style={{padding: 0}}>
                            <View style={{flex: 1, flexDirection: 'column', padding: 0,alignItems:'flex-start'}}>

                                <H3  style={styles.titleNormal}>
                                 {strings.msg.whayTarebaar}
                                </H3>

                            <Text style={[styles.txtMessages,styles.rtl]}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را .
                                </Text>
                            </View>


                            </Body>
                        </CardItem>
                    </Card>



                </Content>
            </Container>
        );
    }
}