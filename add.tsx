import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function Calculator() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    const sum = value1 + value2;
    setResult(sum);
  };
  const handleAddition1 = () => {
    const sum = value1 - value2;
    setResult(sum);
  };
  const handleAddition2 = () => {
    const sum = value1 * value2;
    setResult(sum);
  };
  const handleAddition3 = () => {
    const sum = value1 / value2;
    setResult(sum);
  };
  const clear = () => {
    setResult(0);
    setValue1(0);
    setValue2(0);
  };

  return (
    <View>
      <TextInput style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 10,color:"red",backgroundColor:'pink',textAlign:'center'}}
        
        keyboardType="numeric"
        value={value1.toString()}
        onChangeText={(text) => setValue1(Number(text))}
      />
      <TextInput style={ {width: 200, height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'pink',textAlign:'center'} }
        
        
        keyboardType="numeric"
        value={value2.toString()}
        onChangeText={(text) => setValue2(Number(text))}
      />
      <Text>Result: {result}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
        <View style={{ marginLeft: 10 }}>
          <Button title="+" onPress={handleAddition} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Button title="-" onPress={handleAddition1} />
        </View> 
        <View style={{ marginLeft: 10 }}>
          <Button title="*" onPress={handleAddition2} />
        </View>
         <View style={{ marginLeft: 10 }}>
          <Button title="/" onPress={handleAddition3} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Button title="clear" onPress={clear} />
        </View>
      </View>
    </View>
  );
}

export default Calculator;
