import React, {PureComponent} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import AddButton from './AddButton';
import MinusButton from './MinusButton';
import Counter from './Counter';

export default class CompleteComponent extends PureComponent {
    state = {
        animationValue: new Animated.Value(0),
        counterAnimation: new Animated.Value(0),
        shakeMotion: new Animated.Value(0),
        counter: 1,
        open: false,
    };

    // this is the function called when the AddButton is pressed
    // Basically, if its not "open" yet, we use timing to move the animationValue from 0 to 1 over 500ms
    // Else, we call incrementNumber() below
    animateCircle = () => {
        if (this.state.open) {
            this.incrementNumber();
        } else {
            Animated.timing(this.state.animationValue, {
                toValue: 1,
                duration: 500
            }).start(() => this.setState({open: true}));
        }
    };

    animateCounterAnimation = () => {
        Animated.timing(this.state.counterAnimation, {
            toValue: 1,
            duration: 250
        }).start(() => this.state.counterAnimation.setValue(0));
    };

    shakeMotionAnimation = () => {
        Animated.timing(this.state.shakeMotion, {
            toValue: 1,
            duration: 250
        }).start(() => this.state.shakeMotion.setValue(0));
    };

    decreaseNumber = () => {
        if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - 1});
            this.animateCounterAnimation();
        } else {
            this.shakeMotionAnimation();
        }
    };


    incrementNumber = () => {
        this.setState({counter: this.state.counter + 1});
        this.animateCounterAnimation();
    };

    render() {
        return (
            <View style={styles.container}>
                <AddButton animationValue={this.state.animationValue} animateCircle={this.animateCircle}/>
                <Counter
                    counterAnimation={this.state.counterAnimation}
                    shakeMotion={this.state.shakeMotion}
                    counter={this.state.counter}
                    animationValue={this.state.animationValue}
                />

                <MinusButton
                    animationValue={this.state.animationValue}
                    decreaseNumber={this.decreaseNumber}
                />

            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f5f9',
        borderRadius:20,
    }
};