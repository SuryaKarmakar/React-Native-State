import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FunctionCom = () => {
    const [count, setCount] = useState(0);

    const updateFunctionState = () => {
        setCount(count + 1)
    }
    return (
        <View style={styles.container}>
            <Text>{count}</Text>
            <Button
                onPress={() => updateFunctionState()}
                title="Update State"
                color='#841584'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});
export default FunctionCom;