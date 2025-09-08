import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const OnPress = () => {
  //   const getName = () => {
  //     console.log('This is called when we press the button....');
  //     Alert.alert(
  //       'Button Pressed!',
  //       'This is called when we press the button...',
  //     );
  //   };

  const getName = name => {
    console.log('This is called when we press the button....');
    Alert.alert(
      'Button Pressed!',
      `Hello ${name}, this is called when we press the button...`,
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }} onPress={getName}>
        OnPress
      </Text>
      {/* <Button title="Press" onPress={getName} /> */}
      <Button title="Press" onPress={() => getName('Debashish')} />
    </View>
  );
};

export default OnPress;

//Note:- Do not give the () brackets is there is no parameter to pass in the function onPress={getName}
//       => Like we do in the web application, I mean "onClick" is called for the button click same way in react native "onPress" & "onTap"
//       is used for executing the function when the button is clicked.
//       => Using arrow function "() =>" if the function is called then those function is not called directly, but if we simply call the
//       function without using arrow function then that function get's called directly even if didn't clicked the button.
