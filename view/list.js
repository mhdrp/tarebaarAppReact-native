import React, {Component} from 'react';

import {
    Content,
    Container,
    Button,
    Header,
    Text,
    Right,
    Body,
    Left,
    Icon,
    Card,
    CardItem,
    H2,
    Input, Thumbnail
} from 'native-base'
import {I18nManager, Alert, FlatList, View, TouchableOpacity} from 'react-native';
import styles from '../styles'
import strings from '../strings'
import {Rating, AirbnbRating} from 'react-native-ratings';
import CustomIcon from "../icons/CustomIcon";


I18nManager.forceRTL(true);

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            GridListItems: [
                {key: "1", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 5,countRate:40},
                {key: "2", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 4,countRate:40},
                {key: "3", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 3,countRate:40},
                {key: "4", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 3,countRate:40},
                {key: "5", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 3,countRate:40},
                {key: "6", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 3,countRate:40},
                {key: "7", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 3,countRate:40},
                {key: "8", name: "فروشگاه سوپر علی", location: "خیابان شریعتی", rateStore: 3,countRate:40},


            ]
        };
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        const {goBack} = this.props.navigation;
        const uri = "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2017/06/main/quinoa-bowls-avocado-egg-108p68.jpg?itok=MVkxuumL";
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

                <Content
                          showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}>

                    {/* txt */}
                    <View>
                        {/* title box*/}
                        <View style={styles.titleBox}>
                            <H2 style={styles.txtTitleOne}>
                                فروشگاه ها
                            </H2>

                        </View>


                        <View style={styles.container}>
                            <FlatList
                                data={this.state.GridListItems}
                                renderItem={({item}) =>
                                    <Card style={{
                                        flex: 1,
                                        margin: 15,
                                        marginTop: 50,
                                        padding: 5, borderRadius: 5
                                    }}>
                                        <CardItem style={styles.cardBorderRadius}>
                                            <Body style={{ height: 130,}}>
                                            <View style={{
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                top: -50,
                                                width: "100%",
                                                height: 180,
                                            }}>
                                                <TouchableOpacity
                                                    onPress={() => (this.props.navigation.navigate('Shop'))}
                                                >
                                                <Thumbnail
                                                    style={{
                                                        height: 100,
                                                        justifyContent: "flex-start",
                                                        width: "100%",
                                                        borderRadius: 7
                                                    }}
                                                    square source={{uri: uri}}/>
                                                </TouchableOpacity>
                                            </View>
                                            {/*space between image and text*/}
                                            <View style={{height: 60}}/>

                                            <TouchableOpacity
                                                onPress={() => (this.props.navigation.navigate('Shop'))}
                                            >
                                            {/* name store */}
                                            <Text style={{
                                                color: strings.color.title,
                                                fontFamily: strings.font.medium,
                                                fontSize: strings.size.normalText,
                                            }} onPress={this.GetGridViewItem.bind(this, item.key)}>
                                                {item.name}
                                            </Text>
                                            </TouchableOpacity>
                                            {/* location store*/}
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallText,
                                                marginBottom:7,
                                            }}>
                                                {item.location}
                                            </Text>
                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <View style={{width: 70, height: 20}}>
                                                    {/* rating store */}
                                                    <Rating
                                                        readonly
                                                        imageSize={12}
                                                        startingValue={item.rateStore}
                                                    />
                                                </View>
                                                <View style={{ height: 20}}>
                                                   <Text  style={{
                                                       color: strings.color.text,
                                                       fontFamily: strings.font.light,
                                                       fontSize: strings.size.smallerText,
                                                   }}>
                                                       {item.rateStore}
                                                   </Text>
                                                </View>
                                                <View style={{ height: 20,marginRight:4,marginLeft:4}}>
                                                   <Text  style={{
                                                       color: strings.color.text,
                                                       fontFamily: strings.font.light,
                                                       fontSize: strings.size.smallerText,
                                                   }}>
                                                      ({item.countRate})
                                                   </Text>
                                                </View>

                                            </View>


                                            </Body>
                                        </CardItem>
                                    </Card>}
                                numColumns={2}
                            />
                        </View>

                    </View>


                </Content>


            </Container>
        );
    }
}