import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const FunctionCom = () =>{
    const [count, setCount] = useState(0);
    return(
        <View style={styles.container}>
           <Text>{count}</Text>
                <Button
                    onPress={()=> setCount(count + 1)}
                    title="Update State"
                    color='#841584'
                />
        </View>
    );
}

export default FunctionCom;
const styles = StyleSheet.create({
    container: {
        padding:50
      },
});