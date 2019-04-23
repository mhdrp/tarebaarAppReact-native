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
import {I18nManager, Alert, FlatList, View} from 'react-native';
import styles from '../styles'
import strings from '../strings'
import {Rating, AirbnbRating} from 'react-native-ratings';


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


        const uri = "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2017/06/main/quinoa-bowls-avocado-egg-108p68.jpg?itok=MVkxuumL";
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

                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Messages')}>
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
                                                <Thumbnail
                                                    style={{
                                                        height: 100,
                                                        justifyContent: "flex-start",
                                                        width: "100%",
                                                        borderRadius: 7
                                                    }}
                                                    square source={{uri: uri}}/>
                                            </View>
                                            {/*space between image and text*/}
                                            <View style={{height: 60}}/>


                                            {/* name store */}
                                            <Text style={{
                                                color: strings.color.title,
                                                fontFamily: strings.font.medium,
                                                fontSize: strings.size.normalText,
                                            }} onPress={this.GetGridViewItem.bind(this, item.key)}>
                                                {item.name}
                                            </Text>

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