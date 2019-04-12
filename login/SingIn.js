import React, {Component} from 'react';
import {Content, Container, Button, H1, Text, Item, Label, Input, Form, Card, CardItem, Icon} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, TextInput, Alert, View} from 'react-native';

I18nManager.forceRTL(true);

export default class SingIn extends Component {
    render() {
        return (
            <Container style={[styles.body, styles.textRight]}>
                <Content style={styles.container}>
                    <H1 style={[styles.title, styles.mgTop50]}>{strings.msg.login.loginOrRegister}</H1>
                    {/* card input get phone Number */}
                    <Card style={[styles.cardStyle,styles.cardBorderRadius]}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Content>
                                <Form>
                                    <Item style={[styles.itemInput]}>
                                        <Input
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
                            onPress={() =>{
                            }}>
                            <Text style={styles.txtBtn}>{strings.msg.login.login}</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>
        );
    }
} 