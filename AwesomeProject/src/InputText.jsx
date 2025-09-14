import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 25 }}>InputText</Text>
      <Text style={{ fontSize: 25 }}>Name : {name}</Text>
      <TextInput style={{ fontSize: 15 , borderWidth: 2, borderColor: "red", margin: 10, color: "black"}} 
      onChangeText={(data) => setName(data)} value={name} />
      <Button title='Clear Text' onPress={() => setName('')} />
    </View>
  );
};

export default InputText;


//Note:-   => Used to take user input
//         => Learned how to clear the typed and shown name using value property.
