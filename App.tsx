import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import TodoList from "./TodoList";
import Calculator from "./add";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setbuttonValue] = useState('0');

  const handleButtonPress = (value: string) => {
    if (value === "0") {
      setInputValue("0");
      console.log(inputValue);
    } else {
      setInputValue(inputValue + value);
      console.log(inputValue);
    }
  };
  const clear = () => {
    setInputValue("");
  };

  const add = (buttonValue:any) => {
    setbuttonValue(buttonValue);
  };
  return (
    <View style={styles.container}>
      <Text>Привет моя любимая 💖💖💖💖💖💖ты хочешь чипсы?</Text>
      <View>
        <TextInput
          placeholder="Введите текст..."
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
        
          title="0"
          
          // onPress={() => add('0')}
          onPress={() => handleButtonPress('0')}
          
        />
        <Button
        
          title="1"
           onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />

        <Button
          title="2"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="3"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="4"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="5"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="6"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="7"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="8"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="9"
          onPress={() => {
            // Button press handler
            alert("ТЫ НЕ ХОЧЕШЬ ЕСТЬ");
          }}
        />
        <Button
          title="clear"
          onPress={() => {
            clear();
          }}
        />
        <Button
          title="+"
          // onPress={() => {
          //   add();
          // }}
        />
      </View>
      <StatusBar style="auto" />
      <TodoList></TodoList>
      <Calculator></Calculator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    // justifycontent
    // justifyContent: "center",
    // width:'50%',
    // height:'50%',
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexWrap: "wrap",
    width: "50%",
    height: "30%",
    alignContent: "flex-end",
  },
});
