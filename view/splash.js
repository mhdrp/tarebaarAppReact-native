import React, {Component} from 'react';
import {ActivityIndicator, Alert, I18nManager, Image, StatusBar, TouchableHighlight, View} from 'react-native';

import styles from '../styles'
import strings from "../strings";
import {Container} from "native-base";
I18nManager.forceRTL(true);

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(
            ()=>
                (this.props.navigation.replace('SignIn')),
            3000)
    }

    constructor() {
        super();

    }



    render() {

        return (
           <View style={[styles.itemCenter,styles.body,{flex:1}]}>
               <StatusBar backgroundColor={strings.color.statusBar} barStyle="dark-content" />
               <Image style={{ width: 150,
                   height:176,
                   justifyContent: "center",
                   alignItems: 'center',
               }}  source={require('../assets/logo.jpg')}/>
           <View style={{ marginTop:20
           }} >
               <ActivityIndicator size="large" color={strings.color.primary} />
           </View>
           </View>
        );
    }
}