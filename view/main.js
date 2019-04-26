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
import {
    I18nManager,
    Image,
    Alert,
    View,
    ScrollView,
    TouchableHighlight,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import styles from '../styles'
import strings from '../strings'

import FooterNavigation from '../component/footerNavigation'
import CustomIcon from "../icons/CustomIcon";
import {Rating} from "react-native-ratings";

I18nManager.forceRTL(true);

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        const uri = "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2017/06/main/quinoa-bowls-avocado-egg-108p68.jpg?itok=MVkxuumL";
        const win = Dimensions.get('window');
        return (
            <Container style={styles.body}>

                <Header iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left>
                        <Button transparent>
                            <CustomIcon style={styles.iconHeader} name='menu'/>
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
                            <CustomIcon style={styles.iconHeader} name='mail'/>
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
                            {/*  <Button transparent style={{flex: 1}}>
                                <CustomIcon style={styles.iconSearchBox} name='sliders1'/>
                            </Button>*/}
                        </View>
                    </View>
                    {/* txt */}
                    <View>
                        {/* title box*/}
                        <View style={styles.titleBox}>
                            <H2 style={styles.titleNormal}>
                                میوه فروشی
                            </H2>
                            <Button transparent small
                                    onPress={() => (this.props.navigation.navigate('List'))}
                            >
                                <Text style={styles.txtMore}>
                                    نمایش بیشتر
                                </Text>
                            </Button>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <ScrollView horizontal={true}>
                                {/*          <Card>
                                    <CardItem>
                                        <Body>
                                        </Body>
                                    </CardItem>
                                </Card>*/}

                            </ScrollView>
                        </View>

                    </View>


                    <View style={styles.container}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                        >

                            <Card style={{
                                flex: 1,
                                margin: 15,
                                marginTop: 50,
                                padding: 5, borderRadius: 5
                            }}>
                                <CardItem style={styles.cardBorderRadius}>
                                    <Body style={{height: 130,}}>
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


                                    {/* name store */}
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Shop'))}
                                    >
                                        <Text style={{
                                            color: strings.color.title,
                                            fontFamily: strings.font.medium,
                                            fontSize: strings.size.normalText,
                                        }}>

                                            فروشگاه سوپر علی
                                        </Text>
                                    </TouchableOpacity>
                                    {/* location store*/}
                                    <Text style={{
                                        color: strings.color.text,
                                        fontFamily: strings.font.light,
                                        fontSize: strings.size.smallText,
                                        marginBottom: 7,
                                    }}>
                                        خیابان شریعتی
                                    </Text>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: 70, height: 20}}>
                                            {/* rating store */}
                                            <Rating
                                                readonly
                                                imageSize={12}
                                                startingValue={5}
                                            />
                                        </View>
                                        <View style={{height: 20}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                {5}
                                            </Text>
                                        </View>
                                        <View style={{height: 20, marginRight: 4, marginLeft: 4}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                (40)
                                            </Text>
                                        </View>

                                    </View>


                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={{
                                flex: 1,
                                margin: 15,
                                marginTop: 50,
                                padding: 5, borderRadius: 5
                            }}>
                                <CardItem style={styles.cardBorderRadius}>
                                    <Body style={{height: 130,}}>
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


                                    {/* name store */}
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Shop'))}
                                    >
                                        <Text style={{
                                            color: strings.color.title,
                                            fontFamily: strings.font.medium,
                                            fontSize: strings.size.normalText,
                                        }}>

                                            فروشگاه سوپر علی
                                        </Text>
                                    </TouchableOpacity>
                                    {/* location store*/}
                                    <Text style={{
                                        color: strings.color.text,
                                        fontFamily: strings.font.light,
                                        fontSize: strings.size.smallText,
                                        marginBottom: 7,
                                    }}>
                                        خیابان شریعتی
                                    </Text>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: 70, height: 20}}>
                                            {/* rating store */}
                                            <Rating
                                                readonly
                                                imageSize={12}
                                                startingValue={5}
                                            />
                                        </View>
                                        <View style={{height: 20}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                {5}
                                            </Text>
                                        </View>
                                        <View style={{height: 20, marginRight: 4, marginLeft: 4}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                (40)
                                            </Text>
                                        </View>

                                    </View>


                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={{
                                flex: 1,
                                margin: 15,
                                marginTop: 50,
                                padding: 5, borderRadius: 5
                            }}>
                                <CardItem style={styles.cardBorderRadius}>
                                    <Body style={{height: 130,}}>
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


                                    {/* name store */}
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Shop'))}
                                    >
                                        <Text style={{
                                            color: strings.color.title,
                                            fontFamily: strings.font.medium,
                                            fontSize: strings.size.normalText,
                                        }}>

                                            فروشگاه سوپر علی
                                        </Text>
                                    </TouchableOpacity>
                                    {/* location store*/}
                                    <Text style={{
                                        color: strings.color.text,
                                        fontFamily: strings.font.light,
                                        fontSize: strings.size.smallText,
                                        marginBottom: 7,
                                    }}>
                                        خیابان شریعتی
                                    </Text>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: 70, height: 20}}>
                                            {/* rating store */}
                                            <Rating
                                                readonly
                                                imageSize={12}
                                                startingValue={5}
                                            />
                                        </View>
                                        <View style={{height: 20}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                {5}
                                            </Text>
                                        </View>
                                        <View style={{height: 20, marginRight: 4, marginLeft: 4}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                (40)
                                            </Text>
                                        </View>

                                    </View>


                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={{
                                flex: 1,
                                margin: 15,
                                marginTop: 50,
                                padding: 5, borderRadius: 5
                            }}>
                                <CardItem style={styles.cardBorderRadius}>
                                    <Body style={{height: 130,}}>
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


                                    {/* name store */}
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Shop'))}
                                    >
                                        <Text style={{
                                            color: strings.color.title,
                                            fontFamily: strings.font.medium,
                                            fontSize: strings.size.normalText,
                                        }}>

                                            فروشگاه سوپر علی
                                        </Text>
                                    </TouchableOpacity>
                                    {/* location store*/}
                                    <Text style={{
                                        color: strings.color.text,
                                        fontFamily: strings.font.light,
                                        fontSize: strings.size.smallText,
                                        marginBottom: 7,
                                    }}>
                                        خیابان شریعتی
                                    </Text>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{width: 70, height: 20}}>
                                            {/* rating store */}
                                            <Rating
                                                readonly
                                                imageSize={12}
                                                startingValue={5}
                                            />
                                        </View>
                                        <View style={{height: 20}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                {5}
                                            </Text>
                                        </View>
                                        <View style={{height: 20, marginRight: 4, marginLeft: 4}}>
                                            <Text style={{
                                                color: strings.color.text,
                                                fontFamily: strings.font.light,
                                                fontSize: strings.size.smallerText,
                                            }}>
                                                (40)
                                            </Text>
                                        </View>

                                    </View>


                                    </Body>
                                </CardItem>
                            </Card>


                        </ScrollView>
                    </View>

                    <View style={{flex: 1,}}>
                        <TouchableHighlight
                            onPress={() => (Alert.alert("banner test2"))}
                        >
                            <Image
                                style={{
                                    width: '95%',
                                    height: 100,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    backgroundColor: 'orange',
                                    position: 'relative',
                                    margin: 10,
                                }}
                                source={require('../assets/banner.jpg')}/>
                        </TouchableHighlight>
                    </View>


                </Content>
                <FooterNavigation/>

            </Container>
        );
    }
}