import React, {Component} from 'react';

import {
    H3,
    Text, Thumbnail,
} from 'native-base'
import {I18nManager, TouchableOpacity, View,Linking,Share} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from '../styles'
import strings from '../strings'
import CustomIcon from '../icons/CustomIcon'

I18nManager.forceRTL(true);

class DrawerMenu extends Component {
    callNumber = (url) =>{
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                setTimeout(()=>{
                    return Linking.openURL(url);
                },300)
            }
        }).catch(err => console.error('An error occurred', err));
    };

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'تره بار| سفارش آنلاین \n https://www.tarebaar.com',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    render() {
        const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlm-Uwv34jrl2PuzQiBjhNXva1-3NEN02so2C1PJbuYK_t6ajl";
        return (
            <View style={styles.drawerMenu}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('Profile')
                                      }}
                    >
                        <Thumbnail
                            style={{width: 50, height: 50, justifyContent: "flex-start", borderRadius: 25}}
                            source={{uri: uri}}/>
                        <Text style={[styles.txtDrawerMenu, styles.userNameDrawerMenu]}>
                            مهراد رمضانی پور
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',}}>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('Messages')
                                      }}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="message-circle"/>

                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.messages}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('Wallet')
                                      }}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="credit-card"/>

                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.credit}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={this.onShare}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="users"/>

                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.introduceToFriends}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('Help')
                                      }}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="book"/>

                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.help}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('AboutTarebaar')
                                      }}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="award"/>
                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.aboutTarebaar}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.callNumber(`tel:+919120258966`);
                                      }}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="headphones"/>

                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.support}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default withNavigation(DrawerMenu);