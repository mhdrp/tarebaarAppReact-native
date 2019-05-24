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
    Input, Thumbnail, H3
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
import Modal from "react-native-modal";

I18nManager.forceRTL(true);

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {

            isModalExit: false,
            txtStates: "",
            functionBtn: () => {
            },

        };
    }
    _toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    _toggleModalExit() {
        this.setState({isModalExit: !this.state.isModalExit});
    }
    render() {
        const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlm-Uwv34jrl2PuzQiBjhNXva1-3NEN02so2C1PJbuYK_t6ajl";
        const win = Dimensions.get('window');
        return (
            <Container style={styles.body}>

                <Header iosBarStyle={"dark-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>

                    <Body>

                    </Body>
                    <Right>
                        <Button transparent  onPress={() =>
                            this.setState({
                                isModalExit: true,
                            })}>
                            <CustomIcon style={styles.iconHeaderColor} size={20} name="log-out"/>
                        </Button>
                    </Right>
                </Header>

                <Content
                          showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}>
                    {/* title box*/}
                    <View style={styles.titleBox}>
                        <H2 style={styles.txtTitleOne}>
                           {strings.msg.profile}
                        </H2>

                    </View>


                    <View style={styles.container}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{
                                width: "30%",
                                textAlign: 'center',
                                justifyContent: "flex-start",
                                alignItems: "center",
                                marginLeft: 20,

                            }}>
                                <Thumbnail
                                    style={{width: 100, height: 100, justifyContent: "flex-start", borderRadius: 50}}
                                    source={{uri: uri}}/>
                            </View>
                            <View style={{
                                width: "70%", paddingLeft: 35, alignItems: "flex-start",
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}>
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
                                    onPress={() => (this.props.navigation.navigate('EditProfile'))}
                                >
                                    <View style={styles.btnSmallBorder}>
                                        <Text style={styles.txtSmallBtnBorder}>
                                            {strings.msg.edit}
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                        </View>

                        {/* title box*/}
                        <View style={styles.titleBoxBlowList}>
                            <H2 style={styles.titleNormal}>
                               {strings.msg.account}
                            </H2>

                        </View>
                        <Card style={[styles.cardStyle, styles.cardBorderRadius,styles.mgNull]}>
                            <CardItem style={styles.cardBorderRadius}>


                                <Body style={{padding: 0}}>

                                <View style={styles.itemBox}>

                                    <CustomIcon style={styles.iconItem} size={20} name="map-pin"/>
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('ListAddress'))}
                                    >
                                    <H3 style={styles.txtTitleOneCenter}>
                                      {strings.msg.addresses}
                                    </H3>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemBox}>

                                    <CustomIcon style={styles.iconItem} size={20} name="message-circle"/>
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Messages'))}
                                    >
                                    <H3 style={styles.txtTitleOneCenter}>
                                      {strings.msg.messages}
                                    </H3>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemBox}>

                                    <CustomIcon style={styles.iconItem} size={20} name="truck1"/>
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Orders'))}
                                    >
                                    <H3 style={styles.txtTitleOneCenter}>
                                      {strings.msg.listOrders}
                                    </H3>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.itemBox}>

                                    <CustomIcon style={styles.iconItem} size={20} name="banknote"/>
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate('Wallet'))}
                                    >
                                    <H3 style={styles.txtTitleOneCenter}>
                                      {strings.msg.creditWallet}
                                    </H3>
                                    </TouchableOpacity>
                                </View>

                                </Body>
                            </CardItem>
                        </Card>

                    </View>


                </Content>
                <FooterNavigation profile={strings.color.primary}/>
                <View>
                    <Modal isVisible={this.state.isModalExit}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.boxModal}>

                                <Text style={styles.textModal}>
                                    {strings.msg.doYouSignOut}
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={() => {
                                        this._toggleModalExit();

                                        this.props.navigation.replace('SignIn')
                                    }
                                    }>
                                        <View style={[styles.btnSmallBorder, styles.mgAll10]}>
                                            <Text style={styles.txtSmallBtnBorder}>
                                                {strings.msg.ok}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this._toggleModalExit()}>
                                        <View style={[styles.btnSmallBorder, styles.mgAll10]}>
                                            <Text style={styles.txtSmallBtnBorder}>
                                                {strings.msg.cancel}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Container>
        );
    }
}