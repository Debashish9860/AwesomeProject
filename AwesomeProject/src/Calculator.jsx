import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumberPress = (num) => {
    if (newNumber) {
      setDisplay(num.toString());
      setNewNumber(false);
    } else {
      if (display === '0') {
        setDisplay(num.toString());
      } else {
        setDisplay(display + num);
      }
    }
  };

  const handleDecimalPress = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else {
      if (!display.includes('.')) {
        setDisplay(display + '.');
      }
    }
  };

  const handleOperationPress = (op) => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculateResult();
      setDisplay(result.toString());
      setPreviousValue(result);
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const calculateResult = () => {
    const current = parseFloat(display);
    const previous = previousValue;

    switch (operation) {
      case '+':
        return previous + current;
      case '-':
        return previous - current;
      case '×':
        return previous * current;
      case '÷':
        return previous / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculateResult();
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(display) / 100;
    setDisplay(value.toString());
  };

  const handleToggleSign = () => {
    if (display !== '0') {
      if (display.startsWith('-')) {
        setDisplay(display.substring(1));
      } else {
        setDisplay('-' + display);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handleClear}>
            <Text style={styles.functionButtonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handleToggleSign}>
            <Text style={styles.functionButtonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handlePercentage}>
            <Text style={styles.functionButtonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('÷')}>
            <Text style={styles.operatorButtonText}>÷</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('×')}>
            <Text style={styles.operatorButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('-')}>
            <Text style={styles.operatorButtonText}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperationPress('+')}>
            <Text style={styles.operatorButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleNumberPress(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDecimalPress}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={handleEquals}>
            <Text style={styles.equalsButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minHeight: 120,
  },
  displayText: {
    fontSize: 60,
    color: '#fff',
    fontWeight: '300',
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '400',
  },
  functionButton: {
    backgroundColor: '#a5a5a5',
  },
  functionButtonText: {
    fontSize: 28,
    color: '#000',
    fontWeight: '500',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  operatorButtonText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '400',
  },
  zeroButton: {
    width: 170,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  equalsButton: {
    backgroundColor: '#ff9500',
  },
  equalsButtonText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '400',
  },
});

export default Calculator;