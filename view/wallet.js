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
    Right, H2, Tabs, Tab, Body, Thumbnail
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View,} from 'react-native';

I18nManager.forceRTL(true);

export default class Wallet extends Component {
    constructor() {
        super();
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.body}>
                <Header hasTabs iosBarStyle={"light-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Right>
                        <Button transparent onPress={() => goBack()}>
                            <Icon style={styles.iconHeaderColor} name='arrow-back'/>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.titleBoxOne}>
                    <H2 style={styles.txtTitleOne}>
                        {strings.msg.increaseCredit}
                    </H2>
                </View>

                <Content style={styles.container}>


                    <View style={styles.titleBoxCenter}>
                        <H2 style={styles.txtTitleOneCenter}>
                            {strings.msg.yourCurrentCredentials}
                        </H2>
                    </View>

                    <View style={styles.titleBoxCenter}>
                        <H2 style={styles.txtTitleOne}>
                            0
                            {strings.msg.toman}
                        </H2>
                    </View>
                    <View style={styles.titleBoxCenter}>
                        <H2 style={styles.txtTitleOneCenter}>
                            {strings.msg.txtSelectAmountPrice}
                        </H2>
                    </View>

                    <Card style={{flex: 1, borderRadius: 5}}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Body style={{paddingLeft: 45}}>
                            <View>

                            </View>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>

            </Container>
        );
    }
}