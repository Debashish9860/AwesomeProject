// import { View, Text, Button } from 'react-native';
import { View } from 'react-native';
import React, { useState } from 'react';
// import Calculator from './src/Calculator';
// import InputText from './src/InputText';
// import Props from './src/Props';
// import OnPress from './src/OnPress';
// import UseStateHook from './src/UseStateHook';
// import Jsx from './src/Jsx';
// import First from "./src/First.jsx"
import Calc_Self from "./src/Calc_Self.jsx"

const App = () => {
  // const [name, setName] = useState('Debashish'); // Initial name is 'Piyush'

  // const handlePress = () => {
  //   setName(prevName => (prevName === 'Debashish' ? 'Rajeeb' : 'Debashish'));
  // };

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      {/* <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20, color: 'white' }}>{name}</Text> */}
      {/* <FunctionBasedComponent /> */}
      {/* <First />
      <First />
      <First /> */}
      {/* <Button title="Toggle Name" onPress={handlePress} /> */}
      {/* <Jsx />    */}
      {/* <OnPress /> */}
      {/* <UseStateHook /> */}
      {/* <Props /> */}
      {/* <InputText /> */}
      {/* <Calculator /> */}
      <Calc_Self />
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
