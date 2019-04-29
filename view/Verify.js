import React, {Component} from 'react';
import {Content, Container, Button, H1, Text} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, StatusBar, TextInput, View} from 'react-native';

I18nManager.forceRTL(true);

export default class Verify extends Component {
    constructor() {
        super();
        this.state = {checkTime: true, time: {}, seconds: 90};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    static secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }


    componentDidMount() {
        let timeLeftVar = Verify.secondsToTime(this.state.seconds);
        this.setState({time: timeLeftVar});
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);

        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: Verify.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            this.timer = 0;
            this.setState({checkTime: false});
        }
    }

    render() {
        this.startTimer();

        return (

            <Container style={[styles.body, styles.textRight]}>
                <StatusBar backgroundColor={strings.color.statusBar} barStyle="dark-content" />
                <Content  style={styles.container}
                          showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}>
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
                        textAlign: 'center',
                        justifyContent:"center",
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
                        style={[styles.btnPrimary, styles.btnColorPrimary]}
                        onPress={() => this.props.navigation.replace('Main')}>
                        <Text style={styles.txtBtn}>{strings.msg.verification}</Text>
                    </Button>

                    {/*button for resend sms*/}
                    <Button block transparent disabled={this.state.checkTime}

                            onPress={() => {
                                this.setState(prevState => ({checkTime: true, seconds: 90,}));
                            }}>
                        <Text style={this.state.checkTime ? styles.verifyResendDisable : styles.verifyResendEnable}>
                            {strings.msg.resendCode}
                            ({this.state.time.m}:{this.state.time.s})
                        </Text>
                    </Button>


                </Content>
            </Container>
        );
    }
} 