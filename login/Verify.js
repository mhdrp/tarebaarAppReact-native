import React, {Component} from 'react';
import {Content, Container, Button, H1, Text} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, TextInput, View} from 'react-native';

I18nManager.forceRTL(true);

export default class Verify extends Component {

    render() {

        return (

            <Container style={[styles.body, styles.textRight]}>
                <Content style={styles.container}>
                    <H1 style={[styles.title, styles.mgTop50]}>{strings.msg.verifyNumMobile}</H1>


                    <Text style={[styles.subTitle]}>{strings.msg.txtSubmittedCode}</Text>

                    {/*get phone number as server*/}
                    <Text style={[styles.subTitle]}> 09120258966</Text>

                    {/* fake 4 input for get code verify Phone number */}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row-reverse',
                        margin: 20,
                        alignItems: "center",
                        textAlign: 'center'
                    }}>
                        <TextInput
                            style={[styles.bgInputVerifyCode]}
                            keyboardType='numeric'
                            type="number"
                            autoFocus={true}
                            maxLength={1}
                        />
                        <TextInput
                            style={[styles.bgInputVerifyCode]}
                            keyboardType='numeric'
                            type="number"
                            maxLength={1}
                        />
                        <TextInput
                            style={[styles.bgInputVerifyCode]}
                            keyboardType='numeric'
                            type="number"
                            maxLength={1}
                        />
                        <TextInput
                            style={[styles.bgInputVerifyCode]}
                            keyboardType='numeric'
                            type="number"
                            maxLength={1}
                        />

                    </View>

                    {/*button for resend sms*/}
                    <Button
                        block
                        style={[styles.btnPrimary, styles.btnColorPrimary]}>
                        <Text style={styles.txtBtn}>{strings.msg.verification}</Text>
                    </Button>

                    {/*button for resend sms*/}
                    <Button block transparent>
                        <Text>
                            {strings.msg.resendCode}

                        </Text>
                    </Button>


                </Content>
            </Container>
        );
    }
} 