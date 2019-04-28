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
     ListItem, Radio, Left,Thumbnail,List
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, Alert, View,} from 'react-native';
import CustomIcon from "../icons/CustomIcon";

I18nManager.forceRTL(true);

export default class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio1: false,
            radio2: false,
            radio3: false,
            radio4: true
        };
    }
    toggleRadio1() {
        this.setState({
            radio1: true,
            radio2: false,
            radio3: false,
            radio4: false
        });
    }
    toggleRadio2() {
        this.setState({
            radio1: false,
            radio2: true,
            radio3: false,
            radio4: false
        });
    }
    toggleRadio3() {
        this.setState({
            radio1: false,
            radio2: false,
            radio3: true,
            radio4: false
        });
    }
    toggleRadio4() {
        this.setState({
            radio1: false,
            radio2: false,
            radio3: false,
            radio4: true
        });
    }

    render() {
        const {goBack} = this.props.navigation;
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
                <View style={styles.titleBoxOne}>
                    <H2 style={styles.txtTitleOne}>
                        {strings.msg.increaseCredit}
                    </H2>
                </View>

                <Content style={styles.container}>

                    <View style={styles.titleBoxCenter}>
                        <H2 style={styles.txtTitleOneCenter}>
                            {strings.msg.yourCurrentCredentials}
                        </H2>
                    </View>

                    <View style={styles.titleBoxCenter}>
                        <H2 style={styles.txtTitleOne}>
                            0
                            {strings.msg.toman}
                        </H2>
                    </View>

                    <View style={styles.titleBoxCenter}>
                        <H2 style={styles.txtTitleOneCenter}>
                            {strings.msg.txtSelectAmountPrice}
                        </H2>
                    </View>

                    <Card style={styles.cardBorderRadius}>
                        <CardItem style={styles.cardBorderRadius}>
                              <View style={{flex: 1, flexDirection: 'column', padding: 0}}>


                                  <ListItem
                                      style={{color:"#eee"}}
                                      selected={this.state.radio1}
                                      onPress={() => this.toggleRadio1()}
                                  >
                                      <View style={{flex: 1, flexDirection: 'row'}}>

                                              <Radio style={{width: 40,alignItems:'center'}}
                                                  selected={this.state.radio1}
                                                  onPress={() => this.toggleRadio1()}
                                              />
                                          <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice10}</Text>
                                      </View>
                                  </ListItem>


                                  <ListItem
                                      selected={this.state.radio2}
                                      onPress={() => this.toggleRadio2()}
                                  >
                                      <View style={{flex: 1, flexDirection: 'row'}}>

                                          <Radio style={{width: 40,alignItems:'center'}}
                                                 selected={this.state.radio2}
                                                 onPress={() => this.toggleRadio2()}
                                          />
                                          <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice20}</Text>
                                      </View>
                                  </ListItem>


                                  <ListItem
                                      selected={this.state.radio3}
                                      onPress={() => this.toggleRadio3()}
                                  >
                                      <View style={{flex: 1, flexDirection: 'row',color:"#eee"}}>

                                          <Radio style={{width: 40,alignItems:'center'}}
                                                 selected={this.state.radio3}
                                                 onPress={() => this.toggleRadio3()}
                                          />
                                          <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice50}</Text>
                                      </View>
                                  </ListItem>



                                  <ListItem
                                      selected={this.state.radio4}
                                      onPress={() => this.toggleRadio4()}
                                  >

                                      <View style={{flex: 1, flexDirection: 'row'}}>

                                          <Radio style={{width: 40,alignItems:'center'}}
                                                 selected={this.state.radio4}
                                                 onPress={() => this.toggleRadio4()}
                                          />
                                          <Text style={styles.txtSelectPriceWallet}>{strings.msg.wallet.txtPrice100}</Text>
                                      </View>
                                  </ListItem>

                              </View>
                        </CardItem>
                    </Card>

                    {/* card button */}
                    <Card style={[styles.cardBorderButton, styles.mgUpDown20]}>
                        <Button
                            block
                            style={[styles.btnPrimary, styles.btnColorPrimary]}
                            onPress={() =>{
                                this.props.navigation.navigate('Verify');
                            }}>
                            <Text style={styles.txtBtn}>{strings.msg.increaseCredit}</Text>
                        </Button>
                    </Card>

                </Content>

            </Container>
        );
    }
}