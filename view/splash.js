import React, {Component} from 'react';
import {Alert, I18nManager, Image, TouchableHighlight, View} from 'react-native';

import styles from '../styles'
I18nManager.forceRTL(true);

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(
            ()=>
                (this.props.navigation.navigate('SignIn')),
            300)
    }

    constructor() {
        super();

    }



    render() {

        return (
           <View style={[styles.itemCenter,styles.body,{flex:1}]}>

               <Image style={{ width: 150,
                   height:176,
                   justifyContent: "center",
                   alignItems: 'center',
               }}  source={require('../assets/logo.jpg')}/>

           </View>
        );
    }
}