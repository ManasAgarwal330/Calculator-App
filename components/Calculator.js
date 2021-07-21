import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ToastAndroid,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
import Screen from './Screen';
import Button from './Button';
import History from './History';

function Calculator(props) {
  const onDelete = (buttonPressed) => {
    if (expression && expression !== 'Calculator') {
      let newExpression = expression.slice(0, expression.length - 1);
      setExpression(newExpression);
      convertExpression(newExpression);
    }
  };
  const convertExpression = (exp) => {
    if (exp === '') {
      setActualExpression('');
      setResult('');
      return;
    }
    let newActualExpression = '';
    for (let i in exp) {
      if (exp.charAt(i) === '÷') {
        newActualExpression = `${newActualExpression}${'/'}`;
      } else if (exp.charAt(i) === '×') {
        newActualExpression = `${newActualExpression}${'*'}`;
      } else if (exp.charAt(i) === '−') {
        newActualExpression = `${newActualExpression}${'-'}`;
      } else {
        newActualExpression = `${newActualExpression}${exp.charAt(i)}`;
      }
      setActualExpression(newActualExpression);
      resultCalculate(newActualExpression);
    }
  };
  const resultCalculate = (newActualExpression) => {
    if (newActualExpression === '') {
      setResult('');
    }
    try {
      let res = eval(newActualExpression).toString();
      setResult(res);
    } catch (e) {
      console.log(e);
    }
  };

  const calculateActualExpression = (buttonPressed) => {
    if (buttonPressed === '÷') {
      buttonPressed = '/';
    } else if (buttonPressed === '×') {
      buttonPressed = '*';
    } else if (buttonPressed === '−') {
      buttonPressed = '-';
    }
    let newActualExpression = `${actualExpression}${buttonPressed}`;
    setActualExpression(newActualExpression);
    return newActualExpression;
  };

  const buttonPress = (buttonPressed) => {
    let newExpression = `${expression}${buttonPressed}`;
    setExpression(newExpression);

    // console.log("buttonPressed",buttonPressed);
    let newActualExpression = calculateActualExpression(buttonPressed);
    resultCalculate(newActualExpression);
  };

  const allClear = () => {
    setExpression('');
    setActualExpression('');
    setResult('');
  };

  const equalOperator = () => {
    if (result) {
      let newResultArr = [
        ...resultArr,
        { expression: expression, result: result },
      ];
      // console.log(newResultArr);
      setResultArr(newResultArr);
      setExpression('Calculator');
      setResult(result);
    }
  };

  const hButtonClick = () => {
    setHistoryTabShow(!historyTabShow);
  };

  const clearArr = () => {
    setResultArr([]);
  };


  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [actualExpression, setActualExpression] = useState('');
  const [resultArr, setResultArr] = useState([]);
  const [historyTabShow, setHistoryTabShow] = useState(false);
  return (
    <View style={styles.calculatorComponent}>
      <StatusBar backgroundColor="#ADD8E6" barStyle="dark-content" />
      {historyTabShow && (
        <History
          hButtonClick={hButtonClick}
          clearArr={clearArr}
          resultArr={resultArr}
        />
      )}
      <Screen expression={expression} result={result} />
      <Button
        buttonPress={buttonPress}
        allClear={allClear}
        equalOperator={equalOperator}
        onDelete={onDelete}
        hButtonClick={hButtonClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorComponent: {
    flex: 1,
    position: 'relative',
  },
});

export default Calculator;
