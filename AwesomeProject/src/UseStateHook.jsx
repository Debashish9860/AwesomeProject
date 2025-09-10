import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Debashish');
  const nameChange = () =>
    setName(name === 'Debashish' ? 'Rajeeb' : 'Debashish');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>UseStateHook</Text>
      <Text style={{ fontSize: 30 }}>Name: {name}</Text>
      {/* <Button title="Press" onPress={() => setName("Rajeeb")} /> */}
      <Button title="Press" onPress={nameChange} />
    </View>
  );
};

export default UseStateHook;

//Note :- => Hook are the functions which basically provides the facility to use the React features.
//        => In UseState hook whenever there is a change in the component(value) then it is checked and the new value is taken into consideration
//        => In the UseState hook between the [] brackets the first parameter is variable and second is a function.
//        => UseState basically returns the array in which first is the state variable(name) and another is a functions which updates the
//           state variable value.
