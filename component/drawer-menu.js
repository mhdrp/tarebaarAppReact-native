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
                    <Thumbnail
                        style={{width: 50, height: 50, justifyContent: "flex-start", borderRadius: 25}}
                        source={{uri: uri}}/>
                    <Text style={[styles.txtDrawerMenu,styles.userNameDrawerMenu]}>
                        مهراد رمضانی پور
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column',  justifyContent: 'flex-start',}}>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',height:20}}>
                      <CustomIcon style={styles.iconDrawerMenu} size={20} name="message-circle"/>
                      <TouchableOpacity
                          onPress={() => {
                              this.props.closeDrawer();
                        this.props.navigation.navigate('Messages')}}
                      >
                          <Text style={styles.txtDrawerMenu}>
                            {strings.msg.messages}
                          </Text>
                      </TouchableOpacity>
                  </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',height:20}}>
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="message-circle"/>
                        <TouchableOpacity
                            onPress={() => (this.props.navigation.navigate('Messages'))}
                        >
                            <Text style={styles.txtDrawerMenu}>
                                مهراد رمضانی پور
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="message-circle"/>
                        <TouchableOpacity
                            onPress={() => (this.props.navigation.navigate('Messages'))}
                        >
                            <Text style={styles.txtDrawerMenu}>
                                مهراد رمضانی پور
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                        <CustomIcon style={styles.iconDrawerMenu} size={20} name="message-circle"/>
                        <TouchableOpacity
                            onPress={() => (this.props.navigation.navigate('Messages'))}
                        >
                            <Text style={styles.txtDrawerMenu}>
                                مهراد رمضانی پور
                            </Text>
                        </TouchableOpacity>
                    </View>
              </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                    <Thumbnail
                        style={{width: 50, height: 50, justifyContent: "flex-start", borderRadius: 25}}
                        source={{uri: uri}}/>
                    <Text>
                        مهراد رمضانی پور
                    </Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(DrawerMenu);