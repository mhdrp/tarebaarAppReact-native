import React, {Component} from 'react';

import {
    H3,
    Text, Thumbnail,
} from 'native-base'
import {I18nManager, TouchableOpacity, View,} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from '../styles'
import strings from '../strings'
import CustomIcon from '../icons/CustomIcon'

I18nManager.forceRTL(true);

class DrawerMenu extends Component {

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
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('Messages')
                                      }}
                    >
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="users"/>

                        <Text style={styles.txtDrawerMenu}>
                            {strings.msg.introduceToFriends}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', height: 20}}
                                      onPress={() => {
                                          this.props.closeDrawer();
                                          this.props.navigation.navigate('Messages')
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
                                          this.props.navigation.navigate('Messages')
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
                                          this.props.navigation.navigate('Messages')
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