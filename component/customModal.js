import React, {Component} from 'react';
import {
    Content,
    Container,
    Button,
    H1,
    Text,
    Item,
    Label,
    Input,
    Form,
    Card,
    CardItem,
    Icon,
    Body,
    H3,
} from 'native-base'
import styles from '../styles'
import strings from '../strings'
import {I18nManager, TextInput, Alert, View, TouchableOpacity} from 'react-native';

I18nManager.forceRTL(true);
import Modal from "react-native-modal";
import CustomIcon from "../icons/CustomIcon";

export default class CustomModal extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
        };
    }

    _toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.yoha) {
            this._toggleModal();
        }
    }

    render() {

        return (
            <View>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            height: 120,
                            width: 120, justifyContent: 'center', alignItems: 'center'
                        }}>


                            <Card style={[styles.cardStyle, styles.cardBorderRadius,styles.mgNull]}>
                                <CardItem style={styles.cardBorderRadius}>

                                    <Body style={{padding: 0}}>

                                    <View style={styles.itemBox}>

                                        <Text>Hello!</Text>
                                        <TouchableOpacity onPress={() => this._toggleModal()}>
                                            <Text>Hide me!</Text>
                                        </TouchableOpacity>
                                    </View>


                                    </Body>
                                </CardItem>
                            </Card>

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}