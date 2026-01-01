import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const Calc_Self = () => {
    const [displayValue, setDisplayValue] = useState("0");

    const handleTap = (value) => {
        if (value === "AC") {
            setDisplayValue("0");
        }
        else if(value === "<") {
            setDisplayValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
        }
        else if(value === "="){
            try{
                let equation = displayValue.replace(/X/g, "*");
                const result = eval(equation);
                setDisplayValue(String(result));
            }
            catch(err){
                setDisplayValue("Error");
            }
        }
        else if (value === "%") {
            try {
                let equation = displayValue.replace(/X/g, "*");
                let currentResult = eval(equation);
                const finalPercentage = currentResult / 100;
                setDisplayValue(String(finalPercentage));
            } catch (e) {
                setDisplayValue("Error");
            }
        }
        else{
            const lastChar = displayValue.slice(-1)
            const operators = ["+", "-", "*", "/", "."];
            if (operators.includes(value) && operators.includes(lastChar)) {
                return;
            }
            setDisplayValue((prev) => (prev === "0" ? String(value) : prev + value))
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.displayContainer}>
            <Text style={styles.displayText}>{displayValue}</Text>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("AC")}><Text style={styles.buttonText}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("%")}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("<")}><Text style={styles.buttonText}>🔙</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("/")}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("7")}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("8")}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("9")}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("*")}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("4")}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("5")}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("6")}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("-")}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("1")}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("2")}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("3")}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optButton} onPress={() => handleTap("+")}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("00")}><Text style={styles.buttonText}>00</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap("0")}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleTap(".")}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
            <TouchableOpacity style={styles.equalButton} onPress={() => handleTap("=")}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "flex-end"
    },

    displayContainer: {
        padding: 20,
        alignItems: "flex-end"
    },

    displayText: {
        color: "#f7cbbc",
        fontSize: 50
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },

    button: {
        backgroundColor: "#333",
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "#fff",
        fontSize: 30
    },

    equalButton :{
        backgroundColor: "#f2511d",
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },

    optButton :{
        backgroundColor: "#c2baba",
        color: "#fff",
        fontSize: 30,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Calc_Self