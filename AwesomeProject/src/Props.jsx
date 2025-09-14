 import { View, Text, Button } from 'react-native';
 import React, { useState } from 'react';
 import Child from './Child';
 
 const Props = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
   return (
     <View>
       <Text style = {{fontSize: 25}}>Props Tutorial</Text>
       <Button title="Counter" onPress = {() => setCount(count + 1)} />
        <View style={{ marginTop: 10 }} />
       <Button title="Item" onPress = {() => setItem(item * 2)} />
       <Child data = {count} item = {item} />
     </View>
   )
 }
 
 export default Props


//  Note:-  => For this Child.jsx file is also used.
//          => Props are basically used to send data from one file to another file.
//          => In Props data is sent from parent component to child component only, if you want the reverse then instead of propes we use Lifting.
//          => Full form of porps is "Properties"
//          => Data in prope are sent where they are called only. For example., <Child data = {count} item = {item} />