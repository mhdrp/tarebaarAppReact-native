import React, {Component} from 'react';

import {I18nManager,View,Text} from 'react-native';

I18nManager.forceRTL(true);


class FooterNavigation extends Component {
    render() {
        return(
            <View>
                <Text>
                    hi
                </Text>
            </View>
        )
    }
}
export default FooterNavigation;