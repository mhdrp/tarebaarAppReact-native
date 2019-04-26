import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Tab,
    Tabs,
    TabHeading,
    Text,
    Left,
    Button,
    Icon,
    Body,
    Right,
    H2
} from 'native-base';
import Current from './current';
import Past from './past';
import strings from "../strings";
import styles from "../styles";
import FooterNavigation from "../component/footerNavigation";

import {Alert, I18nManager, View} from 'react-native';
import CustomIcon from "../icons/CustomIcon";

I18nManager.forceRTL(true);
export default class Orders extends Component {
    render() {
        const {goBack} = this.props.navigation;
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
                        {strings.msg.orders}
                    </H2>
                </View>
                <Tabs tabBarUnderlineStyle={styles.tabTabBarUnderlineStyle} tabBarPosition={'overlayTop'}>
                    <Tab heading="قبلی" activeTextStyle={styles.tabActiveTextStyle} textStyle={styles.tabTextStyle}
                         tabStyle={styles.tabTabStyle} activeTabStyle={styles.tabActiveTabStyle}>

                        <Past/>
                    </Tab>
                    <Tab heading="در حال حاضر" activeTextStyle={styles.tabActiveTextStyle}
                         textStyle={styles.tabTextStyle} tabStyle={styles.tabTabStyle}
                         activeTabStyle={styles.tabActiveTabStyle}>
                        <Current/>
                    </Tab>

                </Tabs>
                <FooterNavigation/>
            </Container>
        );
    }
}