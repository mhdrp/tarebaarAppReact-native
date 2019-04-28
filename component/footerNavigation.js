import React, {Component} from 'react';

import {
    Button,
    Text,
    Footer,
    FooterTab,
    Badge,
    Icon,

} from 'native-base'
import styles from '../styles'
import strings from '../strings'

import {withNavigation} from 'react-navigation';
import {I18nManager,} from 'react-native';
import CustomIcon from '../icons/CustomIcon'


I18nManager.forceRTL(true);


class FooterNavigation extends Component {

    constructor() {
        super();
        this.state = {
            maina: "#f00"
        };

    }

    render() {

        return (
            <Footer style={styles.footerNavigation}>
                {/*    //TODO border top color dare check beshe va bardashte beshe */}
                <FooterTab style={[styles.footerBg, styles.containerFooter]}>
                    <Button active style={styles.buttonActiveFooterTab} onPress={() => {
                        this.props.navigation.navigate('Main');
                    }}>

                        <CustomIcon
                            size={22}
                            name="home1"

                            style={[styles.iconFooterTab, {color: this.props.main ? this.props.main : strings.color.iconFooterColor }]}
                        />
                        {/* TODO check if for change color select*/}
                    </Button>
                    <Button style={styles.buttonActiveFooterTab}
                            onPress={() => {
                                this.props.navigation.navigate('Orders');
                            }}>
                        <CustomIcon
                            size={22}
                            name="clipboard"
                            style={[styles.iconFooterTab, {color: this.props.orders ? this.props.orders : strings.color.iconFooterColor }]}
                        />

                    </Button>
                    <Button badge style={styles.buttonActiveFooterTab} onPress={() => {
                        this.props.navigation.navigate('Cart');
                    }}>
                        <Badge><Text>51</Text></Badge>
                        <CustomIcon
                            size={22}
                            name="shopping-cart1"
                            style={[styles.iconFooterTab, styles.shoppingCart,{color: this.props.cart? this.props.cart : strings.color.iconFooterColor }]}
                        />
                        {/* //TODO custom icon bayad postion begire ke badge biad rosh*/}
                        {/*<CustomIcon
                            size={22}
                            name="shopping-cart"
                            style={styles.iconFooterTab}
                        />*/}
                    </Button>
                    <Button style={styles.buttonActiveFooterTab} onPress={() => {
                        this.props.navigation.navigate('Profile');
                    }}>
                        <CustomIcon
                            size={22}
                            name="user"
                            style={[styles.iconFooterTab, {color: this.props.profile? this.props.profile : strings.color.iconFooterColor }]}
                        />
                    </Button>
                </FooterTab>

            </Footer>
        )
    }
}

export default withNavigation(FooterNavigation);