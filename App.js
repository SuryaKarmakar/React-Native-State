
import React from 'react';
import { StyleSheet, View } from 'react-native';

import ClassCom from './component/ClassCom';
import FunctionCom from './component/FunctionCom';

const App = () => {
  return (
    <View style={styles.container}>
      <ClassCom />
      <FunctionCom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;