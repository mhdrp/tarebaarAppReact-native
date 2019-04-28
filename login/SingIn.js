import React, {Component} from 'react';
import {Content, Container, Button, H1, Text, Item, Label, Input, Form, Card, CardItem, Icon,} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, TextInput, Alert, View, TouchableOpacity} from 'react-native';
import Regex from '../utils/regularExpression'
I18nManager.forceRTL(true);
import Modal from "react-native-modal";
import CustomModal from "../component/customModal";

export default class SingIn extends Component {
    constructor() {
        super();
        this.state = {
            txtPhoneNumberValue: "",
            txtErrorPhoneNumber: "",
            secendTxt: "",
            isModalVisible: false,
            txtStates: "",

        };
    }

    _toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }


    render() {

        let regex=new Regex();

        return (
            <Container style={[styles.body, styles.textRight]}>
                <Content style={styles.container}>
                    <H1 style={[styles.title, styles.mgTop50]}>{strings.msg.login.loginOrRegister}</H1>
                    {/* card input get phone Number */}
                    <Card style={[styles.cardStyle, styles.cardBorderRadius]}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Content>
                                <Form>
                                    <Item style={[styles.itemInput]}>
                                        <Input
                                            value={this.state.txtPhoneNumberValue}
                                            keyboardType='numeric'
                                            type="number"
                                            maxLength={11}
                                            style={[styles.txtInputNumber]}
                                            placeholderTextColor={strings.color.txtPlaceInput}
                                            placeholder={strings.msg.login.phoneNumber}
                                            onChangeText={(phoneNumber) => {
                                                this.setState({
                                                    txtPhoneNumberValue: phoneNumber,
                                                })
                                            }}
                                        />

                                    </Item>
                                </Form>
                            </Content>
                        </CardItem>
                    </Card>
                    {/* card button */}
                    <Card style={[styles.cardBorderButton, styles.mgUpDown20]}>
                        <Button
                            block
                            style={[styles.btnPrimary, styles.btnColorPrimary]}
                            onPress={() => {
                                let txtPhoneNumber = this.state.txtPhoneNumberValue;

                                /*convert persian number to english number*/
                                let phoneNumberConvert=regex.convertPhoneNumber(txtPhoneNumber);

                                /* zamani ke inpute phone number khali bashe */
                                if (txtPhoneNumber === "") {
                                    this.setState({isModalVisible: true, txtStates: strings.msg.enterMobileNumber,});

                                } else if (!regex.validatePhoneNumber(phoneNumberConvert)) {
                                    /* zamani ke inpute phone number por bashe */
                                    /*check kardane dorost bodane phone number*/

                                    /*zamani ke phone number ghalat vared shode bashe*/
                                    this.setState({
                                        isModalVisible: true,
                                        txtStates: strings.msg.enterCorrectMobileNumber,
                                        secendTxt: strings.msg.CorrectFormatMobileNumber,
                                    });

                                } else {
                                    /*zamani ke inpute phone number dorost bashe*/
                                    this.props.navigation.navigate('Verify');
                                }

                            }}>
                            <Text style={styles.txtBtn}>{strings.msg.login.login}</Text>
                        </Button>
                    </Card>
                </Content>
                <View>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.boxModal}>
                                <Text style={styles.textModal}>
                                    {this.state.txtStates}
                                </Text>
                                <Text style={styles.textModal}>
                                    {this.state.secendTxt}
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