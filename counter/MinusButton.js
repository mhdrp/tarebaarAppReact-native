import React, { PureComponent } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import {Icon,Button} from 'native-base';
import PropTypes from 'prop-types';

export default class MinusButton extends PureComponent {
    render() {
        const translateMinusCircle = this.props.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [60, 0]
        });

        const scaleDownCircle = this.props.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7]
        });

        const decrementCircleTransforms = {
            transform: [
                { scale: scaleDownCircle },
                { translateX: translateMinusCircle }
            ]
        };

        return (
            <TouchableWithoutFeedback onPress={this.props.decreaseNumber}>
                <Animated.View style={styles.counterIncrementStyle}>
                    <Icon style={styles.iconCounter} name='remove'/>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

MinusButton.propTypes = {
    decreaseNumber: PropTypes.func,
    animationValue: PropTypes.object
};

const styles = {
    counterIncrementStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom:2,
        paddingTop:2,
    },
    iconCounter: {
        color: "#5961fe",
        fontSize: 14
    }
};