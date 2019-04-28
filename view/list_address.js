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
    Right, H2, Tabs, Tab, Body, Thumbnail, H3,Left
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View, ScrollView, TouchableOpacity,} from 'react-native';
import CompleteComponent from '../counter/CompleteComponent'

import CustomIcon from '../icons/CustomIcon'

I18nManager.forceRTL(true);

export default class ListAddress extends Component {
    constructor() {
        super();
    }

    render() {
        const {goBack} = this.props.navigation;
        const uri = "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2017/06/main/quinoa-bowls-avocado-egg-108p68.jpg?itok=MVkxuumL";
        return (
            <Container style={styles.body}>
                <Header hasTabs iosBarStyle={"dark-content"} androidStatusBarColor={strings.color.statusBar}
                        style={styles.headerTop}>
                    <Left style={styles.itemRight}>
                        <Button transparent onPress={() => goBack()}>
                            <CustomIcon style={styles.iconHeader} name='chevron-right'/>
                        </Button>
                    </Left>
                </Header>


                <Content style={styles.container}
                         showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}
                >


                    {/* title box*/}
                    <View style={styles.titleBox}>
                        <H2 style={styles.txtTitleOne}>
                            {strings.msg.listAddress}
                        </H2>
                        <Button transparent small
                                onPress={() => (this.props.navigation.navigate('AddAddress'))}
                        >
                            <Text style={styles.txtMorePrimary}>
                                {strings.msg.addAddress}
                            </Text>
                        </Button>
                    </View>





                    <Card style={styles.cardBorderRadius}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Body>

                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}>
                                <View style={{ justifyContent: 'flex-start',
                                    alignItems: 'flex-start', flexDirection: 'column',      padding: 7, flex:8,}}>

                                    <H3 style={[styles.txtMorePrimary, styles.mgBottom10,styles.textAlignRight]}>
                                        خیابان شریعتی,ابتدای پل صدر خ مصطفی

                                    </H3>
                                    <H3 style={styles.txtMore}>
                                        پلاک ۱۳ واحد ۱
                                    </H3>

                                </View>
                                {/*button edit address */}
                                <TouchableOpacity
                                    onPress={() => (Alert.alert("test"))}
                                >
                                    <View style={{
                                        flex:1,
                                        padding: 10,
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <CustomIcon style={styles.iconFooterTab} size={18} name="edit-3"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardBorderRadius}>
                        <CardItem style={styles.cardBorderRadius}>
                            <Body>

                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}>
                                <View style={{ justifyContent: 'flex-start',
                                    alignItems: 'flex-start', flexDirection: 'column',      padding: 7, flex:8,}}>

                                    <H3 style={[styles.txtMorePrimary, styles.mgBottom10,styles.textAlignRight]}>
                                        خیابان شریعتی,ابتدای پل صدر خ مصطفی

                                    </H3>
                                    <H3 style={styles.txtMore}>
                                        پلاک ۱۳ واحد ۱
                                    </H3>

                                </View>
                                {/*button edit address */}
                                <TouchableOpacity
                                    onPress={() => (Alert.alert("test"))}
                                >
                                    <View style={{
                                        flex:1,
                                        padding: 10,
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <CustomIcon style={styles.iconFooterTab} size={18} name="edit-3"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </Body>
                        </CardItem>
                    </Card>



                </Content>




            </Container>
        );
    }
}