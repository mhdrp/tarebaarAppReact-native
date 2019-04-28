import React, {Component} from 'react';
import {Alert, I18nManager, Image, StatusBar, TouchableHighlight, View} from 'react-native';

import styles from '../styles'
import strings from "../strings";
import {Container} from "native-base";
I18nManager.forceRTL(true);

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(
            ()=>
                (this.props.navigation.replace('SignIn')),
            300)
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

           </View>
        );
    }
}