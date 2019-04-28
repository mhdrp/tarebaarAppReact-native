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
    Right, H2, Body,H3,
    ListItem, Radio, Left, Thumbnail, List, Form, Item, Input,
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, TouchableHighlight, TouchableOpacity, ScrollView,} from 'react-native';
import CustomIcon from "../icons/CustomIcon";
import Modal from "react-native-modal";
import Regex from "../utils/regularExpression";

I18nManager.forceRTL(true);

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtPhoneNumberValue: "+989120258966",
            txtNameValue: "",
            txtEmailValue: "",
            txtIranianNationalCodeValue: "",
            txtSecond: "",
            isModalVisible: false,
            txtStates: "",
        };
    }
    _toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    render() {
        const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlm-Uwv34jrl2PuzQiBjhNXva1-3NEN02so2C1PJbuYK_t6ajl";
        const {goBack} = this.props.navigation;
        let regex=new Regex();
        return (
            <Container style={styles.body}>
                <Header hasTabs iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left style={styles.itemRight}>
                        <Button transparent onPress={() => goBack()}>
                            <CustomIcon style={styles.iconHeader} name='chevron-right'/>
                        </Button>
                    </Left>
                </Header>
                <View style={styles.titleBoxOne}>
                    <H2 style={styles.txtTitleOne}>
                        {strings.msg.editProfile}
                    </H2>
                </View>

                <Content style={styles.container}>

                    <View style={styles.container}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                            <Thumbnail
                                style={{width: 100, height: 100, justifyContent: "flex-start", borderRadius: 50}}
                                source={{uri: uri}}/>

                        </View>

                        {/* title box*/}
                        <View style={styles.titleBoxBlowList}>
                            <H2 style={styles.titleNormal}>
                                {strings.msg.yourInfo}
                            </H2>

                        </View>
                        {/* card show name user */}
                        <Card style={[styles.cardStyle,styles.cardBorderRadius,styles.mgNull]}>
                            <CardItem style={styles.cardBorderRadius}>
                                <Content>
                                    <Form>
                                        <Item style={[styles.itemInputForm]}>
                                            <Input
                                                value={this.state.txtNameValue}
                                                type="text"
                                                style={[styles.txtInput]}
                                                placeholderTextColor={strings.color.txtPlaceInput}
                                                placeholder={strings.msg.nameAndFamily}
                                                onChangeText={(name) => {
                                                    this.setState({
                                                        txtNameValue: name,
                                                    })
                                                }}
                                            />

                                        </Item>
                                        <Item style={[styles.itemInputForm]}>
                                            <Input
                                                disabled={true}
                                                type="text"
                                                style={[styles.txtInput]}
                                                placeholderTextColor={strings.color.txtPlaceInput}
                                                placeholder={this.state.txtPhoneNumberValue}

                                            />

                                        </Item>
                                        <Item style={[styles.itemInputForm]}>
                                            <Input
                                                value={this.state.txtIranianNationalCodeValue}
                                                type="text"
                                                style={[styles.txtInput]}
                                                placeholderTextColor={strings.color.txtPlaceInput}
                                                placeholder={strings.msg.codeMeli}
                                                onChangeText={(codeMeli) => {
                                                    this.setState({
                                                        txtIranianNationalCodeValue: codeMeli,
                                                    })
                                                }}

                                            />

                                        </Item>
                                        <Item style={[styles.itemInputForm]}>
                                            <Input
                                                value={this.state.txtEmailValue}
                                                type="text"
                                                style={[styles.txtInput]}
                                                placeholderTextColor={strings.color.txtPlaceInput}
                                                placeholder={strings.msg.email}
                                                onChangeText={(email) => {
                                                    this.setState({
                                                        txtEmailValue: email,
                                                    })
                                                }}
                                            />
                                        </Item>
                                    </Form>
                                </Content>
                            </CardItem>
                        </Card>

                        {/* card exit user */}
                        <Card style={[styles.cardStyle, styles.cardBorderRadius]}>
                            <CardItem style={styles.cardBorderRadius}>

                                <Body style={{padding: 0}}>

                                <View style={[styles.itemBox,styles.noBorder]}>

                                    <CustomIcon style={[styles.iconItem,,styles.red]} size={20} name="log-out"/>
                                    <TouchableOpacity
                                        onPress={() => Alert.alert("test")}
                                    >
                                        <H3 style={styles.txtTitleOneCenter}>
                                            {strings.msg.exitAccount}
                                        </H3>
                                    </TouchableOpacity>
                                </View>


                                </Body>
                            </CardItem>
                        </Card>

                        {/* card button */}
                        <Card style={[styles.cardBorderButton, styles.mgUpDown20]}>
                            <Button
                                block
                                style={[styles.btnPrimary, styles.btnBorderBlack]}
                                onPress={() => {
                                    let name = this.state.txtNameValue;
                                    let email = this.state.txtEmailValue;
                                    let IranianCode = this.state.txtIranianNationalCodeValue;

                                    /*convert persian IranianCode number to english number*/
                                    let IranianCodeConvert=regex.convertPhoneNumber(IranianCode);

                                    if(name === "" || email === "" || IranianCode === ""){
                                        /*zamani ke yeki az feild ha khali bashe */
                                        this.setState({
                                            isModalVisible: true,
                                            txtStates: strings.msg.fillAllFields,
                                        });
                                    } else {
                                        if(!regex.validateIranianNationalCode(IranianCodeConvert)){
                                            this.setState({
                                                isModalVisible: true,
                                                txtStates: strings.msg.correctNationalCode,
                                            });
                                        }else if(!regex.validateEmail(email)){
                                            this.setState({
                                                isModalVisible: true,
                                                txtStates: strings.msg.correctEmail,
                                            });
                                        }else {
                                            /*zamani ke inpute phone number dorost bashe*/
                                           this.props.navigation.navigate('Verify');
                                        }



                                    }

                                }}>
                                <Text style={[styles.txtBtn, styles.btnTextBorderBlack]}>{strings.msg.submitInfo}</Text>
                            </Button>
                        </Card>

                    </View>


                </Content>
                <View>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.boxModal}>
                                <Text style={styles.textModal}>
                                    {this.state.txtStates}
                                </Text>
                                <Text style={styles.textModal}>
                                    {this.state.txtSecond}
                                </Text>
                                <TouchableOpacity onPress={() => this._toggleModal()}>
                                    <View style={styles.btnSmallBorder}>
                                        <Text style={styles.txtSmallBtnBorder}>
                                            {strings.msg.ok}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Container>
        );
    }
}