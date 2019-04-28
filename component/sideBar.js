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
import {I18nManager, Alert, View,} from 'react-native';
import CustomIcon from "../icons/CustomIcon";

I18nManager.forceRTL(true);

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={{backgroundColor:strings.color.primary,flex:1}}>

                <View style={{flex: 1, flexDirection: 'row'}}>

                    <Radio style={{width: 40,alignItems:'center'}}
                           selected={this.state.radio2}
                           onPress={() => this.toggleRadio2()}
                    />
                    <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice20}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>

                    <Radio style={{width: 40,alignItems:'center'}}
                           selected={this.state.radio2}
                           onPress={() => this.toggleRadio2()}
                    />
                    <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice20}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>

                    <Radio style={{width: 40,alignItems:'center'}}
                           selected={this.state.radio2}
                           onPress={() => this.toggleRadio2()}
                    />
                    <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice20}</Text>
                </View>
            </View>
        );
    }
}