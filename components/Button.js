import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

function Button(props) {
  const buttonRipple = {
    color: '#ADD8E6',
    radius: 50,
  };
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.leftButtonContainer}>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={props.allClear}>
          <Text style={styles.leftButtonText}>AC</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={props.onDelete}>
          <Text style={styles.leftButtonText}>DEL</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('%');
          }}>
          <Text style={styles.leftButtonText}>%</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('7');
          }}>
          <Text style={styles.leftButtonText}>7</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('8');
          }}>
          <Text style={styles.leftButtonText}>8</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('9');
          }}>
          <Text style={styles.leftButtonText}>9</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('4');
          }}>
          <Text style={styles.leftButtonText}>4</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('5');
          }}>
          <Text style={styles.leftButtonText}>5</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('6');
          }}>
          <Text style={styles.leftButtonText}>6</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('3');
          }}>
          <Text style={styles.leftButtonText}>3</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('2');
          }}>
          <Text style={styles.leftButtonText}>2</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('1');
          }}>
          <Text style={styles.leftButtonText}>1</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={props.hButtonClick}>
          <Text style={styles.leftButtonText}>H</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('0');
          }}>
          <Text style={styles.leftButtonText}>0</Text>
        </Pressable>
        <Pressable
          style={styles.leftButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('.');
          }}>
          <Text style={styles.leftButtonText}>.</Text>
        </Pressable>
      </View>
      <View style={styles.rightButtonContainer}>
        <Pressable
          style={styles.rightButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('÷');
          }}>
          <Text style={styles.rightButtonText}>÷</Text>
        </Pressable>
        <Pressable
          style={styles.rightButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('×');
          }}>
          <Text style={styles.rightButtonText}>×</Text>
        </Pressable>
        <Pressable
          style={styles.rightButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('-');
          }}>
          <Text style={styles.rightButtonText}>−</Text>
        </Pressable>
        <Pressable
          style={styles.rightButton}
          android_ripple={buttonRipple}
          onPress={() => {
            props.buttonPress('+');
          }}>
          <Text style={styles.rightButtonText}>+</Text>
        </Pressable>
        <Pressable
          style={styles.rightButton}
          android_ripple={buttonRipple}
          onPress={props.equalOperator}>
          <Text style={styles.rightButtonText}>=</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 7,
    flexDirection: 'row',
  },
  leftButtonContainer: {
    flex: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  rightButtonContainer: {
    flex: 2,
  },
  leftButton: {
    height: '20%',
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButtonText: {
    fontSize: 30,
    fontFamily: 'serif',
  },
  rightButton: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtonText: {
    backgroundColor: '#ADD8E6',
    fontSize: 40,
    fontFamily: 'serif',
    fontWeight: 'bold',
    height: 60,
    width: 60,
    borderRadius: 30,
    textAlign: 'center',
  },
});

export default Button;
