import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  title: string;
  setTitle: (taskId:number,text: string) => void;
  id:number
  setShow: (taskId:number) => void;
};

const Input = (props: Props) => {
  const [value, setValue] = useState(props.title);

  const setNewTitle = (text: string) => {
    setValue(text);
  };
  return (
    <View style={[styles.container,{flexDirection: "row"}]}>
      <TextInput
        style={[styles.input, styles.border]}
        value={value}
        onChangeText={(text:string)=>setNewTitle(text)}
        
      />
      <View ><Button  title={'+'} onPress={()=>{props.setTitle(props.id,value)
    props.setShow(0)}}/></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    backgroundColor: "#e6e6fa",
    fontSize: 16,
    padding: 10,
    marginLeft: 10,
  },
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 5,
      
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 10,
    margin:10,
    display:"flex",
    flexDirection:'column-reverse',


  },
  border: {
       borderRadius: 5,
    borderWidth: 1,
    borderColor: "green",
  },
  
});

export { Input };
