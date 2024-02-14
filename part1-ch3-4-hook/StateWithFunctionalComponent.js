import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  //Number
  const [count, setCount] = useState(0);
  //Boolean
  const [isOn, setIsOn] = useState(false);
  //String
  const [name, setName] = useState("");
  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Text>------------------------------------------------------</Text>
      <Switch
        value={isOn}
        onValueChange={v =>{
          console.log("v",v);
          setIsOn(v)
        }}/>

      <Text>------------------------------------------------------</Text>
      <TextInput
        placeholder="이름을 입력하세요"
        value={name}
        onChangeText={v =>{
          console.log("v",v);
          setName(v)
        }}/>
    </View>
  );
};

export default Component;