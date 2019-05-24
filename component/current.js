import React, {Component} from 'react';
import {Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button} from 'native-base';
import {Alert, I18nManager, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import styles from '../styles'
import strings from '../strings'
import {withNavigation} from 'react-navigation';

I18nManager.forceRTL(true);

class Current extends Component {
    render() {
        const uri = "http://clipart-library.com/data_images/1650.jpg";
        return (
            <Container style={styles.body}>

                <Content style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HistoryOrder')}
                    >
                        <Card style={styles.cardBorderRadius}>
                            <CardItem style={styles.cardBorderRadius}>
                                <Body>
                                <View style={{flex: 1, flexDirection: 'row',alignItems:"flex-start",justifyContent: 'flex-start'}}>
                                    <View style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                    }}>

                                        <Thumbnail style={{height: 50, justifyContent: "flex-start",}}
                                                   source={{uri: uri}}/>

                                    </View>
                                    <View style={{flex: 1, paddingLeft: 15,alignItems:"flex-start",justifyContent: 'flex-start'}}>
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
                                    <View style={{width: "27%", alignItems: "flex-end",}}>

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

                                        {/*button Details */}
                                        <TouchableOpacity
                                            onPress={() => (Alert.alert("test"))}
                                        >
                                            <View style={styles.mgTop20}>
                                                <Text style={styles.txtDetails}>
                                                    {strings.msg.details}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                </Content>
            </Container>
        );
    }
}

export default withNavigation(Current);