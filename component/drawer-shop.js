import React, {Component} from 'react';

import {Button, H2, H3, Text, Thumbnail,} from 'native-base'
import {I18nManager, TouchableOpacity, View, Linking, Share, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from '../styles'
import strings from '../strings'
import CustomIcon from '../icons/CustomIcon'
import { Rating, AirbnbRating } from 'react-native-ratings';
I18nManager.forceRTL(true);

class DrawerShop extends Component {

    render() {

        return (
            <View style={styles.drawerShop}>
                {/*image and name store*/}
                <View style={{flexDirection: 'row', padding: 3, alignItems: 'center', margin: 4, borderColor: strings.color.borderColor, borderBottomWidth: 1, paddingBottom: 10}}>
                    <Image
                        style={styles.imgStoreDrawer}
                        source={require('../assets/banner.jpg')}/>
                    <H2 style={[styles.txtTitleOne,{width:200}]}>
                        فروشگاه پیش فرض
                    </H2>
                </View>
                {/*image and name store*/}



                <View style={[styles.titleBox,{justifyContent: 'flex-start'}]}>
                   <View style={{    justifyContent: 'center',
                       alignItems: 'center', marginRight:7}}>
                       {/* rating store */}
                       <Rating
                           type='custom'
                           readonly
                           imageSize={10}
                           startingValue={5}
                       />
                   </View>
                    <Text style={[styles.txtMore,styles.heightText]}>
                        (250) 4,9
                    </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginBottom: 10, justifyContent: 'space-between',}}>
                    <View style={styles.itemRow}>
                        <CustomIcon
                            style={[styles.itemIcon, styles.colorPrimary]} name='dollar-sign'/>
                        <H2 style={styles.txtMore}>
                            تخفیف تا ۱۰٪
                        </H2>

                    </View>
                    <View style={styles.itemRow}>
                        <CustomIcon
                            style={[styles.itemIcon, styles.colorPrimary]} name='banknote'/>
                        <H2 style={styles.txtMore}>
                           پرداخت آنلاین
                        </H2>

                    </View>
                    <View style={styles.itemRow}>
                        <CustomIcon
                            style={[styles.itemIcon, styles.colorPrimary]} name='truck1'/>
                        <H2 style={styles.txtMore}>
                            ارسال رایگان
                        </H2>

                    </View>
                </View>


                <View style={[styles.titleBox,{justifyContent: 'flex-start',}]}>
                    <CustomIcon
                        style={[styles.itemIcon, styles.colorPrimary]} name='map-pin'/>
                    <Text style={[styles.txtMore,styles.heightText]}>
                        خیابان شریعتی , خیابان شهرید رجایی ,کوچه مقصمی ,پلاک ۱۰
                    </Text>
                </View>

                {/* hours work*/}
                <View style={styles.titleBox}>
                    <H2 style={[styles.titleNormal,styles.heightText]}>
                        {strings.msg.catShop}
                    </H2>
                </View>
                <View style={[styles.titleBox,{justifyContent: 'flex-start',alignItems:"center"}]}>
                    <Text style={styles.itemCatShop}>
                       میوه
                    </Text>
                    <Text style={styles.itemCatShop}>
                       سبزیجات
                    </Text>


                </View>

                {/* hours work*/}
                 <View style={styles.titleBox}>
                     <H2 style={[styles.titleNormal,styles.heightText]}>
                         {strings.msg.workHours}
                     </H2>
                 </View>
                 <View style={[styles.titleBox,{justifyContent: 'flex-start',}]}>
                     <H2 style={[styles.txtMore,styles.heightText,{width:120}]}>
                         شنبه-پنج شنبه
                     </H2>
                     <H2 style={[styles.txtMore,styles.heightText]}>
                         ۹صبح- ۹شب
                     </H2>

                 </View>
                 <View style={[styles.titleBox,{justifyContent: 'flex-start',}]}>
                     <H2 style={[styles.txtMore,styles.heightText,{width:120}]}>
                         جعمه
                     </H2>
                     <H2 style={[styles.txtMore,styles.heightText]}>
                         ۱۱ صبح - ۴عصر
                     </H2>



                 </View>


            </View>
        );
    }
}

export default withNavigation(DrawerShop);