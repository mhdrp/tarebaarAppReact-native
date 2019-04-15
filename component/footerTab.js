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


import {I18nManager,} from 'react-native';

I18nManager.forceRTL(true);


class FooterTab extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <Footer style={styles.footerNavigation}>
                {/*    //TODO border top color dare check beshe va bardashte beshe */}
                <FooterTab style={[styles.footerBg, styles.containerFooter]}>

                </FooterTab>

            </Footer>
        )
    }
}
export default withNavigation(FooterTab);