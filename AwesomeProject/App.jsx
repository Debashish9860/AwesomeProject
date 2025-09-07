// import { View, Text, Button } from 'react-native';
import { View } from 'react-native';
import React, { useState } from 'react';
import Jsx from './src/Jsx';
// import First from "./src/First.jsx"

const App = () => {
  const [name, setName] = useState('Debashish'); // Initial name is 'Piyush'

  const handlePress = () => {
    setName(prevName => (prevName === 'Debashish' ? 'Rajeeb' : 'Debashish'));
  };

  return (
    <View>
      {/* <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20, color: 'white' }}>{name}</Text> */}
      {/* <FunctionBasedComponent /> */}
      {/* <First />
      <First />
      <First /> */}
      {/* <Button title="Toggle Name" onPress={handlePress} /> */}
      <Jsx />   
    </View>
  );
};

// const FunctionBasedComponent = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 20, color: 'white' }}>Function Based Text</Text>
//     </View>
//   );
// };

export default App;
