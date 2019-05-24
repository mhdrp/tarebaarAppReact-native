
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
    Right, H2, Body,
    ListItem, Radio, Left, Thumbnail, List
} from 'native-base'
import styles from '../styles'
import strings from '../strings'

import {I18nManager, Alert,ActivityIndicator, View,} from 'react-native';


I18nManager.forceRTL(true);

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color={strings.color.primary} />
                <Text style={styles.loadingPleaseWait}>
                    {strings.msg.pleaseWait}
                </Text>
            </View>
        );
    }
}