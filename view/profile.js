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
import CustomIcon from '../icons/CustomIcon'

I18nManager.forceRTL(true);

export default class Profile extends Component {
    constructor() {
        super();
    }

    render() {
        const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlm-Uwv34jrl2PuzQiBjhNXva1-3NEN02so2C1PJbuYK_t6ajl";
        const win = Dimensions.get('window');
        return (
            <Container style={styles.body}>

                <Header iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left>
                        <Button transparent>
                            <CustomIcon style={styles.iconHeaderColor} size={20} name='menu'/>
                        </Button>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                        <Button transparent    onPress={() => this.props.navigation.navigate('Messages')}>
                            <CustomIcon style={styles.iconHeaderColor} size={20} name="log-out"/>
                        </Button>
                    </Right>
                </Header>

                <Content>
                    {/* title box*/}
                    <View style={styles.titleBox}>
                        <H2 style={styles.txtTitleOne}>
                            فروشگاه ها
                        </H2>

                    </View>


                <View style={styles.container}>
                    <View style={{flex: 1, flexDirection: 'row',   justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            width: "30%",
                            textAlign: 'center',
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginLeft:20,

                        }}>
                            <Thumbnail style={{width:100,height: 100,justifyContent: "flex-start",borderRadius:50}} source={{uri: uri}}/>
                        </View>
                        <View style={{width: "70%",  paddingLeft: 35,alignItems:"flex-start",
                            alignSelf: 'center',
                            justifyContent: 'center',}}>


                            {/* name user */}
                            <Text style={{
                                color: strings.color.title,
                                fontFamily: strings.font.medium,
                                fontSize: strings.size.largerText,
                            }}>
                             اشکان خطیبی
                            </Text>


                            {/* Text number user*/}
                            <Text style={{
                                color: strings.color.text,
                                fontFamily: strings.font.light,
                                fontSize: strings.size.smallText,
                            }}>
                               +989120258966
                            </Text>

                            <TouchableOpacity
                                onPress={() => (Alert.alert("test"))}
                            >
                                <View style={styles.btnSmallBorder}>
                                    <Text style={styles.txtSmallBtnBorder}>
                                        {strings.msg.edit}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
                </Content>
                <FooterNavigation/>

            </Container>
        );
    }
}