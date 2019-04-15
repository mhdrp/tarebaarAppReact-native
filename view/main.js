import React, {Component} from 'react';

import {I18nManager,  View,Text} from 'react-native';
import FooterTab from '../component/FooterTab'
I18nManager.forceRTL(true);

import FooterNavigation from '../component/footerNavigation'
export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>
                    main-page
                </Text>
                <FooterNavigation/>
            </View>
        );
    }
}