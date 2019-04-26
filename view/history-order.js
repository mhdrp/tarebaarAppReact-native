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
    Right, H2, Tabs, Tab, Body, Thumbnail, H3,Left
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, ScrollView, TouchableOpacity,} from 'react-native';
import CompleteComponent from '../counter/CompleteComponent'

import CustomIcon from '../icons/CustomIcon'
import { Rating, AirbnbRating } from 'react-native-ratings';

I18nManager.forceRTL(true);

export default class HistoryOrder extends Component {
    constructor() {
        super();
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        const {goBack} = this.props.navigation;

        return (
            <Container style={styles.body}>
                <Header hasTabs iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <CustomIcon style={styles.iconHeader} name='chevron-right'/>
                        </Button>
                    </Left>
                </Header>


                <Content style={styles.container}
                         showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}
                >

                    <View style={styles.titleBoxOne}>
                        <H2 style={styles.txtTitleOne}>
                            سوپر علی
                        </H2>
                    </View>


                    {/* title box*/}
                    <View style={[styles.titleListAddress,styles.mgNull]}>
                        <H2 style={[styles.titleNormal,styles.green]}>
                        تحویل داده شد
                        </H2>
                        <Button transparent small
                                onPress={() => (Alert.alert("test"))}
                        >
                            <Text style={[styles.txtMorePrimary,styles.tabTextStyle]}>
                              دوشنبه ۹۷,۲,۱
                            </Text>
                        </Button>
                    </View>


                    {/* card exit user */}
                    <Card style={[styles.cardStyle, styles.cardBorderRadius,styles.mgNull]}>
                        <CardItem style={styles.cardBorderRadius}>


                            <Body style={{padding: 0}}>

                            <View style={[styles.itemBox,styles.noBorder,styles.column]}>

                                <H2 style={styles.titleNormal}>
                                    {strings.msg.txtRateTheStore}
                                </H2>


                                {/* rating store */}
                               <View style={styles.mgUpDown20}>
                                   <AirbnbRating
                                       showRating={false}
                                       defaultRating={0}
                                       onFinishRating={this.ratingCompleted}
                                       style={{ paddingVertical: 10 }}
                                   />
                               </View>

                                {/*button Details */}
                                <TouchableOpacity
                                    onPress={() => (Alert.alert("test"))}
                                >
                                    <View>
                                        <Text style={[styles.titleNormal,styles.colorPrimary]}>
                                            {strings.msg.submit}
                                        </Text>
                                    </View>

                                </TouchableOpacity>


                            </View>





                            </Body>
                        </CardItem>
                    </Card>


                    {/* list address */}
                    <Card style={[styles.cardBorderRadius,styles.mgUpDown20]}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Body>

                            <View style={{
                                flex: 1,
                                maxWidth: 230,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>
                                <View style={{justifyContent: 'space-between', flexDirection: 'column',padding: 7, }}>

                                    <H3 style={[styles.txtMorePrimary, styles.mgBottom10]}>
                                        خیابان شریعتی,ابتدای پل صدر خ مصطفی

                                    </H3>
                                    <H3 style={styles.txtMore}>
                                        پلاک ۱۳ واحد ۱
                                    </H3>

                                </View>
                                {/*button edit address */}
                            </View>
                            </Body>
                        </CardItem>
                    </Card>




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



            </Container>
        );
    }
}