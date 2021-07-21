import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function Screen(props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.expressionDisplay}>
        <Text style={styles.expressionText}>{props.expression}</Text>
      </View>
      <View style={styles.resultDisplay}>
        <Text style={styles.resultText}>{props.result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 3,
  },
  expressionDisplay: {
    height: '40%',
    paddingTop:20,
    backgroundColor: 'white',
    paddingRight: 20,
  },
  resultDisplay: {
    height: '30%',
    backgroundColor: 'white',
    paddingRight: 20,
  },
  expressionText: {
    fontSize: 35,
    textAlign: 'right',
  },
  resultText: {
    fontSize: 30,
    textAlign: 'right',
  },
});

export default Screen;
