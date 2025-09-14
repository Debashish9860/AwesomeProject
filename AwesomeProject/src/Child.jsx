import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  return (
    <View>
      <Text style={{fontSize: 25}}>Props value in Child :- {props.data}</Text>
      <Text style={{fontSize: 25}}>Props value in Child :- {props.item}</Text>
    </View>
  )
}

export default Child