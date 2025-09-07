import { View, Text } from 'react-native';
import React from 'react';

const Jsx = () => {
  let name = 'Debashish';
  const getAge = () => {
    return 25;
  }
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Jsx</Text>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text style={{ fontSize: 20 }}>{5+3}</Text>
      <Text style={{ fontSize: 20 }}>{getAge()}</Text>
    </View>
  );
};

export default Jsx;

//Note:- Basically initially we were using DOM manipulation in html and JS, I mean if i want to change something in the view page then we
//        use to target it using id, class and then using inner text and all we change it's value. This was very hectic and lengthy process.
//        So React made it simple to write the html and JS in the single line using {} braces.
//        Using this we don't need to make the seperate HTML, CSS, JS file for designing or backend development.
//        For example., in the above example like we directly used the name in the <Text> using {} tag which was very easy and simple, but
//        same thing if we have done using DOM manipulation then we have to use id or class or inner html text and all, which was hectic
//        So basically this "JSX" which is provided by "React"
//        => One main thing is JSX can work only for the expression (which returns something) and does not work for statement
//        Means here name is returning Debashish so it can be used but for loop can not be worked but it can we worked using map function.