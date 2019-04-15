import React, {Component} from 'react';
import {Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button} from 'native-base';
import {Alert, I18nManager, View, TouchableNativeFeedback} from 'react-native';
import styles from '../styles'
import strings from '../strings'
import { Rating, AirbnbRating } from 'react-native-ratings';

I18nManager.forceRTL(true);
export default class Past extends Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        const uri = "http://clipart-library.com/data_images/1650.jpg";
        return (
            <Container style={styles.body}>
                <Content style={styles.container}>
                    <Card style={styles.cardBorderRadius}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Body>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{
                                    width: "18%",

                                    textAlign: 'center',
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}>
                                    <Thumbnail style={{height: 50,justifyContent: "flex-start",}} source={{uri: uri}}/>
                                </View>
                                <View style={{width: "55%",  paddingLeft: 15}}>
                                    {/* Text date*/}
                                    <Text style={{
                                        color: strings.color.text,
                                        fontFamily: strings.font.light,
                                        fontSize: strings.size.smallestText,
                                    }}>
                                        17 شهریور ۱۲۹۷
                                    </Text>

                                    {/* name store */}
                                    <Text style={{
                                        color: strings.color.title,
                                        fontFamily: strings.font.medium,
                                        fontSize: strings.size.normalText,
                                    }}>
                                        سوپر علی
                                    </Text>

                                    {/*text state order*/}
                                    <Text style={{
                                        color: "#2e67ff",
                                        lineHeight: 24,
                                        fontFamily: strings.font.light,
                                        fontSize: strings.size.smallestText,
                                    }}>
                                        • منتظر پیک
                                    </Text>

                                </View>
                                <View style={{width: "27%",  alignItems: "flex-end",}}>

                                    {/* Text Price*/}
                                    <Text style={{
                                        color: strings.color.text,
                                        textAlign: 'left',
                                        lineHeight: 24,
                                        fontFamily: strings.font.medium,
                                        fontSize: strings.size.smallerText,
                                    }}>
                                        25.000
                                        {strings.msg.toman}
                                    </Text>

                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row',borderTopWidth:1,borderTopColor:strings.color.borderCardColor,paddingTop:7}}>
                                <View style={{width: "18%", textAlign: 'center', justifyContent: "flex-start", alignItems: "center",}}>
                                </View>
                                <View style={{width: "55%",  paddingLeft: 15,alignItems: "flex-start"}}>


                                    {/* rating store */}
                                    <Rating
                                        readonly
                                        imageSize={10}
                                        startingValue={5}
                                    />

                                </View>
                                <View style={{width: "27%",  alignItems: "flex-end",}}>

                                    {/*button Details */}
                                    <TouchableNativeFeedback
                                        onPress={() => (Alert.alert("test"))}
                                    >
                                        <View>
                                            <Text style={styles.txtDetails}>
                                                {strings.msg.details}
                                            </Text>
                                        </View>
                                    </TouchableNativeFeedback>

                                </View>
                            </View>

                            </Body>

                        </CardItem>

                    </Card>
                </Content>
            </Container>
        );
    }
}