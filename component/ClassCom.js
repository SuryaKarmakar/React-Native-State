import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ClassCom extends Component {
    //we can define state directly or in our constructor
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    updateClassState = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>{this.state.value}</Text>
                <Button
                    onPress={() => this.updateClassState()}
                    title='Update State'
                    color='#841584'
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});